import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  ArrowLeft,
  Shield,
  Database,
  FileText,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Users,
  Lock,
  Trash2,
  Mail
} from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import type { Page } from '../../App';

interface PrivacyPageProps {
  onNavigate: (page: Page) => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  const { t } = useTranslation();

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
              {t('privacy.back_home')}
            </Button>
            <h1 className="text-4xl mb-4">{t('privacy.title')}</h1>
            <p className="text-muted-foreground text-lg">
              {t('privacy.description')}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Badge variant="outline">{t('privacy.updated')}</Badge>
            </div>
          </div>

          <div className="grid gap-8">
            {/* Introdução */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  {t('privacy.intro_title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('privacy.intro_desc')}
                </p>
              </CardContent>
            </Card>

            {/* Dados Coletados no Frontend */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {t('privacy.frontend_data_title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg mb-4">{t('privacy.frontend_config')}</h3>
                  <p className="text-muted-foreground mb-4">
                    <Trans i18nKey="privacy.frontend_config_desc">
                      Um arquivo <code className="bg-muted px-2 py-1 rounded">config.json</code> é salvo no diretório do usuário (<code className="bg-muted px-2 py-1 rounded">$HOME/.config/minecli/config.json</code> ou equivalente). Ele contém:
                    </Trans>
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span><strong>Token:</strong> JWT para autenticação</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span><strong>Username:</strong> Nome do GitHub</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span><strong>IP:</strong> Último IP público detectado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span><strong>Language:</strong> Idioma escolhido</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="mb-2 text-sm text-muted-foreground">{t('privacy.frontend_config_sample')}</h4>
                    <pre className="text-sm overflow-x-auto">
{`{
  "token": "eyJhbGciOiJI... (JWT)",
  "username": "theus123",
  "ip": "189.23.45.67",
  "language": "pt"
}`}
                  </pre>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>{t('privacy.frontend_config_local').split(':')[0]}:</strong> {t('privacy.frontend_config_local').split(':').slice(1).join(':')}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg mb-4">{t('privacy.frontend_ip')}</h3>
                  <p className="text-muted-foreground">
                    <Trans i18nKey="privacy.frontend_ip_desc">
                      Ao realizar login ou atualizar o DNS, o CLI coleta o endereço IP público da máquina do usuário utilizando serviços como <code className="bg-muted px-2 py-1 rounded">https://api.ipify.org</code> ou <code className="bg-muted px-2 py-1 rounded">https://ipwho.is</code>. Este IP é enviado ao backend para a criação/atualização do subdomínio.
                    </Trans>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Dados Coletados no Backend */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  {t('privacy.backend_data_title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  {t('privacy.backend_desc')}
                </p>
                <div>
                  <h3 className="text-lg mb-4">{t('privacy.backend_db')}</h3>
                  <p className="text-muted-foreground mb-4">
                    <Trans i18nKey="privacy.backend_db_desc">
                      Ao autenticar via GitHub, as seguintes informações são salvas na coleção <code className="bg-muted px-2 py-1 rounded">users</code>:
                    </Trans>
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span><strong>username:</strong> Nome de usuário do GitHub</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span><strong>githubId:</strong> ID único do GitHub</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span><strong>token:</strong> Token JWT da sessão</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span><strong>ip:</strong> Último IP usado para o domínio</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span><strong>lastLogin:</strong> Data do último login</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span><strong>github_token:</strong> Token de acesso do GitHub</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="mb-2 text-sm text-muted-foreground">{t('privacy.backend_db_sample')}</h4>
                    <pre className="text-sm overflow-x-auto">
{`{
  "username": "theus123",
  "githubId": 543210,
  "token": "eyJhbGciOiJI... (JWT)",
  "ip": "189.23.45.67",
  "lastLogin": "2025-07-30T21:20:00.000Z",
  "github_token": "gho_abcd1234..." 
}`}
                  </pre>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg mb-4">{t('privacy.backend_dns')}</h3>
                  <p className="text-muted-foreground">
                    <Trans i18nKey="privacy.backend_dns_desc">
                      Ao criar ou atualizar o subdomínio, o backend envia o <code className="bg-muted px-2 py-1 rounded">username</code> e o <code className="bg-muted px-2 py-1 rounded">ip</code> para a API do Cloudflare, criando/atualizando um registro do tipo A do subdomínio <code className="bg-muted px-2 py-1 rounded">&lt;username&gt;.&lt;domain&gt;</code>.
                    </Trans>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg mb-4">{t('privacy.backend_delete')}</h3>
                  <p className="text-muted-foreground">
                    <Trans i18nKey="privacy.backend_delete_desc">
                      Quando o usuário solicita exclusão (<code className="bg-muted px-2 py-1 rounded">/delete</code>), o backend remove:
                    </Trans>
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <Trash2 className="h-4 w-4 text-red-500" />
                      <Trans i18nKey="privacy.backend_delete_db">
                        Todos os dados do usuário em <code className="bg-muted px-1 rounded">users</code> (MongoDB)
                      </Trans>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trash2 className="h-4 w-4 text-red-500" />
                      {t('privacy.backend_delete_cf')}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dados NÃO Coletados */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-green-600" />
                  {t('privacy.no_data_title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{t('privacy.no_data_desc')}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-green-500" />
                      {t('privacy.no_data_password')}
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-green-500" />
                      {t('privacy.no_data_personal')}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-green-500" />
                      {t('privacy.no_data_telemetry')}
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-green-500" />
                      {t('privacy.no_data_files')}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compartilhamento de Dados */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  {t('privacy.sharing_title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4" />
                      </div>
                      <h4>{t('privacy.sharing_github')}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t('privacy.sharing_github_desc')}
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-orange-600" />
                      </div>
                      <h4>{t('privacy.sharing_cf')}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t('privacy.sharing_cf_desc')}
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                        <XCircle className="h-4 w-4 text-red-600" />
                      </div>
                      <h4>{t('privacy.sharing_third')}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t('privacy.sharing_third_desc')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Finalidades */}
            <Card>
              <CardHeader>
                <CardTitle>{t('privacy.purposes_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="mb-1">{t('privacy.purposes_auth')}</h4>
                        <p className="text-sm text-muted-foreground">{t('privacy.purposes_auth_desc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="mb-1">{t('privacy.purposes_personal')}</h4>
                        <p className="text-sm text-muted-foreground">{t('privacy.purposes_personal_desc')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Database className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="mb-1">{t('privacy.purposes_dns')}</h4>
                        <p className="text-sm text-muted-foreground">{t('privacy.purposes_dns_desc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="mb-1">{t('privacy.purposes_local')}</h4>
                        <p className="text-sm text-muted-foreground">{t('privacy.purposes_local_desc')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Segurança */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  {t('privacy.security_title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{t('privacy.security_jwt')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{t('privacy.security_no_share')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{t('privacy.security_config')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exclusão de Dados */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trash2 className="h-5 w-5" />
                  {t('privacy.delete_title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <h4>{t('privacy.delete_process')}</h4>
                  </div>
                  <p className="text-sm">
                    {t('privacy.delete_desc')}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contato */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  {t('privacy.contact_title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('privacy.contact_desc')}
                </p>
                <Button variant="outline" asChild>
                  <a href="https://github.com/mineflared/mineflared/issues" target="_blank" rel="noopener noreferrer">
                    <Mail className="mr-2 h-4 w-4" />
                    GitHub Issues
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Rodapé da Política */}
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="mb-2">{t('privacy.footer_commitment')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('privacy.footer_desc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => onNavigate('docs')}>
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
