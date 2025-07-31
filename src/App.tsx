import { useState } from 'react';
import { Button } from "./components/ui/button";
import {
    Server,
    ChevronRight,
    Globe
} from "lucide-react";
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';
import { HomePage } from './components/pages/HomePage';
import { DocsPage } from './components/pages/DocsPage';
import { InstallPage } from './components/pages/InstallPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { useTranslation } from 'react-i18next';
import './App.css';

export type Page = 'home' | 'docs' | 'install' | 'privacy';

function AppContent() {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const { t, i18n } = useTranslation();

    const navigateTo = (page: Page) => {
        setCurrentPage(page);
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const scrollToSection = (sectionId: string) => {
        if (currentPage !== 'home') {
            setCurrentPage('home');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted">
            {/* Header */}
            <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center relative">
                    <div
                        className="flex items-center space-x-2 cursor-pointer absolute left-0 top-1/2 -translate-y-1/2"
                        onClick={() => navigateTo('home')}
                    >
                        <Server className="h-8 w-8 text-primary" />
                        <span className="text-xl font-semibold">{t('app.title')}</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6 mx-auto justify-center">
                        <button
                            onClick={() => scrollToSection('features')}
                            className="text-sm hover:text-primary transition-colors"
                        >
                            {t('nav.features')}
                        </button>
                        <button
                            onClick={() => scrollToSection('tech')}
                            className="text-sm hover:text-primary transition-colors"
                        >
                            {t('nav.tech')}
                        </button>
                        <button
                            onClick={() => navigateTo('docs')}
                            className="text-sm hover:text-primary transition-colors"
                        >
                            {t('nav.docs')}
                        </button>
                        <button
                            onClick={() => navigateTo('privacy')}
                            className="text-sm hover:text-primary transition-colors"
                        >
                            {t('nav.privacy')}
                        </button>
                    </nav>
                    <div className="flex items-center space-x-2 absolute right-0 top-1/2 -translate-y-1/2">
                        <div className="flex items-center mr-2">
                            <Globe className="h-4 w-4 mr-1" />
                            <button
                                onClick={() => changeLanguage('pt-BR')}
                                className={`text-xs px-2 py-1 rounded ${i18n.language === 'pt-BR' ? 'bg-primary text-primary-foreground' : 'hover:text-primary'}`}
                            >
                                PT
                            </button>
                            <span className="mx-1 text-muted-foreground">|</span>
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`text-xs px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-primary text-primary-foreground' : 'hover:text-primary'}`}
                            >
                                EN
                            </button>
                        </div>
                        <ThemeToggle />
                        <Button className="hidden md:inline-flex" onClick={() => navigateTo('install')}>
                            {t('nav.getStarted')}
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </header>

            {/* Page Content */}
            {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
            {currentPage === 'docs' && <DocsPage onNavigate={navigateTo} />}
            {currentPage === 'install' && <InstallPage onNavigate={navigateTo} />}
            {currentPage === 'privacy' && <PrivacyPage onNavigate={navigateTo} />}

            {/* Footer - Only show on home page */}
            {currentPage === 'home' && (
                <footer id="contact" className="border-t bg-muted/50">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                                <Server className="h-6 w-6 text-primary" />
                                <span className="font-semibold">Mineflared</span>
                            </div>
                            <div className="flex space-x-6">
                                <button
                                    onClick={() => navigateTo('docs')}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {t('home.footer.documentation')}
                                </button>
                                <button
                                    onClick={() => navigateTo('privacy')}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {t('home.footer.privacy')}
                                </button>
                                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {t('home.footer.github')}
                                </a>
                                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {t('home.footer.support')}
                                </a>
                            </div>
                        </div>
                        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                            {t('home.footer.copyright')}
                        </div>
                    </div>
                </footer>
            )}
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="mineflared-theme">
            <AppContent />
        </ThemeProvider>
    );
}
