import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Terminal,
  Download,
  ArrowLeft,
  Copy,
  Laptop,
  Monitor,
  CheckCircle
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Page } from '../../App';

interface InstallPageProps {
  onNavigate: (page: Page) => void;
}

export function InstallPage({ onNavigate }: InstallPageProps) {
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
              {t('install.back_home')}
            </Button>
            <h1 className="text-4xl mb-4">{t('install.title')}</h1>
            <p className="text-muted-foreground text-lg">
              {t('install.description')}
            </p>
          </div>

          <div className="grid gap-8">
            {/* Quick Install */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  {t('install.quick_install')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Laptop className="h-5 w-5" />
                    <h3>{t('install.windows')}</h3>
                    <Badge variant="outline">{t('install.recommended')}</Badge>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <code className="text-sm break-all">
                        iex (iwr -Uri "https://mineflared.theushen.me/install.ps1").Content
                      </code>
                      <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard('iex (iwr -Uri "https://mineflared.theushen.me/install.ps1").Content')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t('install.powershell_tip')}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Monitor className="h-5 w-5" />
                    <h3>{t('install.multi')}</h3>
                    <Badge variant="outline">{t('install.universal')}</Badge>
                    <Badge variant="outline">{t('In Development')}</Badge>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
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
                  <p className="text-sm text-muted-foreground mt-2">
                    {t('install.npm_tip')}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* System Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>{t('install.requirements')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="mb-3">{t('install.minimum')}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {t('install.req_windows')}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {t('install.req_node')}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {t('install.req_2gb')}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {t('install.req_internet')}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3">{t('install.recommended_title')}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        {t('install.req_4gb')}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        {t('install.req_ssd')}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        {t('install.req_band')}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        {t('install.req_cpu')}
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Installation Steps */}
            <Card>
              <CardHeader>
                <CardTitle>{t('install.steps')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      <h4 className="mb-2">{t('install.step1')}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('install.step1_tip')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <h4 className="mb-2">{t('install.step2')}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t('install.step2_tip')}
                      </p>
                      <div className="bg-muted p-3 rounded-lg">
                        <code className="text-sm">mineflared --version</code>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <h4 className="mb-2">{t('install.step3')}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t('install.step3_tip')}
                      </p>
                      <div className="bg-muted p-3 rounded-lg">
                        <code className="text-sm">mineflared auth login</code>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <h4 className="mb-2">{t('install.step4')}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t('install.step4_tip')}
                      </p>
                      <div className="bg-muted p-3 rounded-lg">
                        <code className="text-sm">mineflared create meu-servidor</code>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card>
              <CardHeader>
                <CardTitle>{t('install.troubleshoot')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2">{t('install.trouble_perm')}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {t('install.trouble_perm_desc')}
                    </p>
                    <div className="bg-muted p-3 rounded-lg">
                      <code className="text-sm">Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser</code>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2">{t('install.trouble_node')}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {t('install.trouble_node_desc')}
                    </p>
                    <Button variant="outline" asChild>
                      <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
                        nodejs.org
                      </a>
                    </Button>
                  </div>
                  <div>
                    <h4 className="mb-2">{t('install.trouble_cmd')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('install.trouble_cmd_desc')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle>{t('install.next_steps')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  {t('install.next_desc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => onNavigate('docs')}>
                    <Terminal className="mr-2 h-4 w-4" />
                    {t('install.see_docs')}
                  </Button>
                  <Button variant="outline" onClick={() => onNavigate('home')}>
                    {t('install.back_start')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  );
}
