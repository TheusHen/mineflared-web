import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Server,
    Globe,
    CheckCircle,
    XCircle,
    Loader2,
    RefreshCw,
    ShieldAlert,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useTranslation } from "react-i18next";

type StatusResponse = {
    status: "online" | "offline";
    message: string;
    error?: string;
};

const STATUS_API_URL = import.meta.env.VITE_MS_STATUS_URL as string;

export function StatusPage() {
    const { t } = useTranslation();
    const [status, setStatus] = useState<StatusResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState("");
    const [fetchKey, setFetchKey] = useState(0);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const user = params.get("username");
        setUsername(user);
        setInputValue(user || "");
        if (!user) {
            setError(t("status.username_required"));
            setLoading(false);
            return;
        }
        setLoading(true);
        setError(null);
        setStatus(null);

        fetch(`${STATUS_API_URL}?username=${encodeURIComponent(user)}`, {
            headers: {
                origin: "https://mineflared.theushen.me",
            },
        })
            .then(async (res) => {
                const data = await res.json();
                if (!res.ok) throw new Error(data.message || data.error || "Error");
                setStatus(data);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setStatus(null);
            })
            .finally(() => setLoading(false));
    }, [fetchKey, t]);

    const handleRetry = () => {
        setFetchKey((k) => k + 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue?.trim()) return;
        window.location.search = `?username=${encodeURIComponent(inputValue.trim())}`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted flex flex-col">
            <div className="container mx-auto px-4 py-10 flex flex-col max-w-xl">
                <motion.div
                    className="flex items-center mb-6 gap-3 self-center"
                    initial={{ opacity: 0, y: -18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                >
                    <Server className="h-9 w-9 text-primary" />
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        {t("status.title")}
                    </h1>
                </motion.div>
                <motion.p
                    className="text-center text-muted-foreground mb-6"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12, duration: 0.5, type: "spring" }}
                >
                    {t("status.subtitle")}
                </motion.p>

                {/* Username input/search */}
                <motion.form
                    className="flex gap-2 mb-8 justify-center"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <input
                        className="rounded-md border px-4 py-2 w-full max-w-xs bg-background focus:outline-none focus:ring-2 focus:ring-primary text-base"
                        type="text"
                        value={inputValue}
                        placeholder={t("status.input_placeholder")}
                        onChange={(e) => setInputValue(e.target.value)}
                        autoFocus={!username}
                        spellCheck={false}
                    />
                    <Button type="submit" variant="default" size="sm">
                        {t("status.search")}
                    </Button>
                </motion.form>

                <AnimatePresence mode="wait">
                    {loading && (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            className="flex flex-col items-center gap-2 py-12"
                        >
                            <Loader2 className="h-7 w-7 animate-spin text-primary" />
                            <span className="mt-1 text-muted-foreground">{t("status.loading")}</span>
                        </motion.div>
                    )}

                    {!loading && error && (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            className="flex flex-col items-center gap-2 py-10"
                        >
                            <ShieldAlert className="h-8 w-8 text-destructive" />
                            <span className="font-medium text-destructive">{error}</span>
                            <Button
                                variant="outline"
                                className="mt-2"
                                onClick={handleRetry}
                            >
                                <RefreshCw className="mr-2 h-4 w-4" />
                                {t("status.retry")}
                            </Button>
                        </motion.div>
                    )}

                    {!loading && !error && status && (
                        <motion.div
                            key="status"
                            initial={{ opacity: 0, y: 18, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 18, scale: 0.98 }}
                            transition={{ type: "spring" }}
                        >
                            <Card className="shadow-lg border-2 border-primary/20">
                                <CardHeader className="pb-2">
                                    <CardTitle className="flex items-center gap-2">
                                        <Globe className="h-5 w-5" />
                                        {t("status.server_status")}
                                        <Badge
                                            className={
                                                status.status === "online"
                                                    ? "bg-green-500 text-white"
                                                    : "bg-destructive text-white"
                                            }
                                        >
                                            {status.status === "online"
                                                ? t("status.online")
                                                : t("status.offline")}
                                        </Badge>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col items-center justify-center py-6">
                                    {status.status === "online" ? (
                                        <motion.div
                                            initial={{ scale: 0.7, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="flex flex-col items-center"
                                        >
                                            <CheckCircle className="h-14 w-14 text-green-500 mb-2 drop-shadow" />
                                            <span className="text-lg font-semibold text-primary mb-1">
                        {t("status.success")}
                      </span>
                                            <p className="text-center text-muted-foreground">
                                                {status.message}
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ scale: 0.7, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="flex flex-col items-center"
                                        >
                                            <XCircle className="h-14 w-14 text-destructive mb-2 drop-shadow" />
                                            <span className="text-lg font-semibold text-destructive mb-1">
                        {t("status.not_online")}
                      </span>
                                            <p className="text-center text-muted-foreground">
                                                {status.message}
                                            </p>
                                        </motion.div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}