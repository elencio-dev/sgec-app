import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Input } from './components/ui';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <h1 className="text-xl font-semibold text-neutral-900">SGEC App</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">Dashboard</a>
              <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">Relatórios</a>
              <a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">Configurações</a>
            </nav>
            <Button variant="primary" size="sm">
              Entrar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 animate-fade-in">
            Sistema Profissional com
            <span className="text-primary-600 block">Design Moderno</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            Uma aplicação empresarial construída com as melhores práticas de design, 
            tipografia Roboto e um sistema de cores profissional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button variant="primary" size="lg">
              Começar Agora
            </Button>
            <Button variant="outline" size="lg">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Características do Sistema
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Desenvolvido com foco em usabilidade, acessibilidade e design profissional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="elevated" className="animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle>Performance</CardTitle>
                <CardDescription>
                  Otimizado para máxima velocidade e eficiência
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="elevated" className="animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-success-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>Confiabilidade</CardTitle>
                <CardDescription>
                  Sistema robusto e estável para uso empresarial
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="elevated" className="animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-warning-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-warning-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <CardTitle>Segurança</CardTitle>
                <CardDescription>
                  Proteção avançada para seus dados
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-neutral-600">
              Preencha o formulário abaixo para mais informações
            </p>
          </div>
          
          <Card className="animate-fade-in">
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Nome"
                  placeholder="Seu nome completo"
                  variant="outlined"
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="seu@email.com"
                  variant="outlined"
                />
              </div>
              
              <Input
                label="Empresa"
                placeholder="Nome da sua empresa"
                variant="outlined"
              />
              
              <Input
                label="Mensagem"
                placeholder="Como podemos ajudar?"
                variant="outlined"
              />
              
              <div className="flex gap-4 pt-4">
                <Button variant="primary" className="flex-1">
                  Enviar Mensagem
                </Button>
                <Button variant="secondary" className="flex-1">
                  Limpar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <h3 className="text-xl font-semibold">SGEC App</h3>
              </div>
              <p className="text-neutral-400">
                Sistema profissional para gestão empresarial com design moderno e tipografia Roboto.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400">
            <p>&copy; 2024 SGEC App. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
