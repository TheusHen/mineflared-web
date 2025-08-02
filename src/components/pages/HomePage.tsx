import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { useTranslation } from 'react-i18next';
import { 
  Terminal, 
  Shield, 
  Key, 
  Cloud, 
  Database, 
  Globe, 
  Zap, 
  FileCode, 
  Palette,
  Github,
  Chrome
} from 'lucide-react';
import type { Page } from '../../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-4">
          {t('home.hero.badge')}
        </Badge>
        <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text">
          {t('app.title')}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          {t('app.tagline')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8" onClick={() => onNavigate('install')}>
            <Terminal className="mr-2 h-5 w-5" />
            {t('home.hero.installCli')}
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8" onClick={() => onNavigate('docs')}>
            {t('home.hero.viewDocs')}
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">{t('home.features.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('home.features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 border-2 hover:border-primary/20 transition-colors">
            <CardContent className="p-0">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl mb-2">{t('home.features.instantSetup.title')}</h3>
                <p className="text-muted-foreground">
                  {t('home.features.instantSetup.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 border-2 hover:border-primary/20 transition-colors">
            <CardContent className="p-0">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl mb-2">{t('home.features.ddosProtection.title')}</h3>
                <p className="text-muted-foreground">
                  {t('home.features.ddosProtection.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 border-2 hover:border-primary/20 transition-colors">
            <CardContent className="p-0">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl mb-2">{t('home.features.dynamicDns.title')}</h3>
                <p className="text-muted-foreground">
                  {t('home.features.dynamicDns.description')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">{t('home.tech.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('home.tech.subtitle')}
          </p>
        </div>

        {/* CLI & Backend */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center">{t('home.tech.cliBackend')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Terminal className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="mb-2">{t('home.tech.golang')}</h4>
                <p className="text-sm text-muted-foreground mb-3">{t('home.tech.golangDesc')}</p>
                <Badge variant="outline">{t('home.tech.backend')}</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="flex space-x-1">
                    <Github className="h-4 w-4 text-green-600" />
                    <Chrome className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <h4 className="mb-2">{t('home.tech.oauth2')}</h4>
                <p className="text-sm text-muted-foreground mb-3">{t('home.tech.oauth2Desc')}</p>
                <Badge variant="outline">{t('home.tech.auth')}</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Key className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="mb-2">{t('home.tech.jwt')}</h4>
                <p className="text-sm text-muted-foreground mb-3">{t('home.tech.jwtDesc')}</p>
                <Badge variant="outline">{t('home.tech.security')}</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Infrastructure */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center">{t('home.tech.infrastructure')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="mb-2">{t('home.tech.cloudflare')}</h4>
                <p className="text-sm text-muted-foreground mb-3">{t('home.tech.cloudflareDesc')}</p>
                <Badge variant="outline">CDN</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="mb-2">{t('home.tech.mongodb')}</h4>
                <p className="text-sm text-muted-foreground mb-3">{t('home.tech.mongodbDesc')}</p>
                <Badge variant="outline">{t('home.tech.database')}</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-black dark:bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white dark:text-black" />
                </div>
                <h4 className="mb-2">{t('home.tech.render')}</h4>
                <p className="text-sm text-muted-foreground mb-3">{t('home.tech.renderDesc')}</p>
                <Badge variant="outline">{t('home.tech.hosting')}</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Frontend */}
        <div>
          <h3 className="text-2xl mb-8 text-center">{t('home.tech.frontend')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-black dark:bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileCode className="h-8 w-8 text-white dark:text-black" />
                </div>
                <h4 className="mb-2">{t('home.tech.vite')}</h4>
                <p className="text-sm text-muted-foreground mb-3">{t('home.tech.viteDesc')}</p>
                <Badge variant="outline">{t('home.tech.react')}</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileCode className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="mb-2">{t('home.tech.typescript')}</h4>
                <p className="text-sm text-muted-foreground mb-3">{t('home.tech.typescriptDesc')}</p>
                <Badge variant="outline">{t('home.tech.language')}</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-cyan-600" />
                </div>
                <h4 className="mb-2">{t('home.tech.tailwind')}</h4>
                <p className="text-sm text-muted-foreground mb-3">{t('home.tech.tailwindDesc')}</p>
                <Badge variant="outline">{t('home.tech.css')}</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-0 text-center">
            <h2 className="text-3xl mb-4">{t('home.cta.title')}</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('home.cta.subtitle')}
            </p>

            {/* Installation Options */}
            <div className="space-y-4 mb-6">
              <div className="bg-card border rounded-lg p-4">
                <h4 className="mb-2 text-sm text-muted-foreground text-center">{t('home.cta.powershell')}</h4>
                <code className="text-sm bg-muted px-3 py-2 rounded block break-all">
                  Invoke-WebRequest -Uri "https://mineflared.theushen.me/install.ps1" -OutFile "$env:TEMP\install.ps1" && powershell -ExecutionPolicy Bypass -File "$env:TEMP\install.ps1"
                </code>
              </div>

              <div className="bg-card border rounded-lg p-4">
                <h4 className="mb-2 text-sm text-muted-foreground text-center">
                  {t('home.cta.npm')}
                </h4>
                <div className="flex justify-center mb-2">
                  <span className="px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 text-xs font-semibold">In Development</span>
                </div>
                <code className="text-sm bg-muted px-3 py-2 rounded block">
                  npm install -g mineflared
                </code>
              </div>

              <div className="bg-card border rounded-lg p-4">
                <h4 className="mb-2 text-sm text-muted-foreground text-center">
                  Docker
                </h4>
                <div className="flex justify-center mb-2">
                  <span className="px-2 py-0.5 rounded bg-gray-200 text-gray-700 text-xs font-semibold">Coming Soon</span>
                </div>
                <code className="text-sm bg-muted px-3 py-2 rounded block">
                  docker run theushen/mineflared
                </code>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={() => onNavigate('install')}>
                <Terminal className="mr-2 h-5 w-5" />
                {t('home.cta.getStarted')}
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" onClick={() => onNavigate('docs')}>
                {t('home.cta.viewDocs')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
