import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { useTranslation, Trans } from 'react-i18next';
import {
  Terminal,
  Play,
  Settings,
  ArrowLeft,
  Copy,
  CheckCircle
} from 'lucide-react';

import type { Page } from '../../App';

interface DocsPageProps {
  onNavigate: (page: Page) => void;
}

export function DocsPage({ onNavigate }: DocsPageProps) {
  const { t } = useTranslation();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Button
                variant="ghost"
                onClick={() => onNavigate('home')}
                className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('docs.back_home')}
            </Button>
            <h1 className="text-4xl mb-4">{t('docs.title')}</h1>
            <p className="text-muted-foreground text-lg">
              {t('docs.description')}
            </p>
          </div>

          <div className="grid gap-8">
            {/* Getting Started */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  {t('docs.getting_started')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg mb-2">{t('docs.install_1')}</h3>
                  <p className="text-muted-foreground mb-3">
                    {t('docs.install_1_desc')}
                  </p>
                  <div className="space-y-3">
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="flex items-center justify-between">
                        <code className="text-sm">npm install -g mineflared</code>
                        <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard('npm install -g mineflared')}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="flex items-center justify-between">
                        <code className="text-sm break-all">
                          iex (iwr -Uri "https://install.mineflared.theushen.me/install.ps1").Content
                        </code>
                        <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard('iex (iwr -Uri "https://install.mineflared.theushen.me/install.ps1").Content')}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg mb-2">{t('docs.auth_2')}</h3>
                  <p className="text-muted-foreground mb-3">
                    {t('docs.auth_2_desc')}
                  </p>
                  <div className="bg-muted p-3 rounded-lg">
                    <code className="text-sm">mineflared login</code>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg mb-2">{t('docs.create_3')}</h3>
                  <p className="text-muted-foreground mb-3">
                    {t('docs.create_3_desc')}
                  </p>
                  <div className="bg-muted p-3 rounded-lg">
                    <code className="text-sm">mineflared create</code>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Commands */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  {t('docs.main_commands')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <code className="font-mono">{t('docs.cmd_login')}</code>
                      <Badge variant="outline">AUTH</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t('docs.cmd_login_desc')}
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <code className="font-mono">{t('docs.cmd_create')}</code>
                      <Badge variant="outline">CREATE</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t('docs.cmd_create_desc')}
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <code className="font-mono">{t('docs.cmd_status')}</code>
                      <Badge variant="outline">STATUS</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t('docs.cmd_status_desc')}
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <code className="font-mono">{t('docs.cmd_language')}</code>
                      <Badge variant="outline">CONFIG</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t('docs.cmd_language_desc')}
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <code className="font-mono">{t('docs.cmd_list')}</code>
                      <Badge variant="outline">LIST</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t('docs.cmd_list_desc')}
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <code className="font-mono">{t('docs.cmd_start')}</code>
                      <Badge variant="outline">START</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t('docs.cmd_start_desc')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  {t('docs.config_title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg mb-2">{t('docs.server_config')}</h3>
                  <p className="text-muted-foreground mb-3">
                    <Trans i18nKey="docs.server_config_desc">
                      Abre uma interface web para editar o arquivo <code>server.properties</code>:
                    </Trans>
                  </p>
                  <div className="bg-muted p-3 rounded-lg">
                    <code className="text-sm">mineflared config</code>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t('docs.server_config_tip')}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg mb-2">{t('docs.backup_restore')}</h3>
                  <p className="text-muted-foreground mb-3">
                    {t('docs.backup_desc')}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <div className="bg-muted p-3 rounded-lg mb-2">
                        <code className="text-sm">{t('docs.backup_cmd')}</code>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t('docs.backup_cmd_desc')}
                      </p>
                    </div>
                    <div>
                      <div className="bg-muted p-3 rounded-lg mb-2">
                        <code className="text-sm">{t('docs.restore_cmd')}</code>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t('docs.restore_cmd_desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  {t('docs.features_title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4>{t('docs.feature_ddos')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('docs.feature_ddos_desc')}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4>{t('docs.feature_dns')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('docs.feature_dns_desc')}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4>{t('docs.feature_monitor')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('docs.feature_monitor_desc')}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4>{t('docs.feature_restart')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('docs.feature_restart_desc')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  );
}
