# Sistema de Design Profissional - SGEC App

## Visão Geral

Este projeto implementa um sistema de design profissional baseado nas melhores práticas do [TweakCN](https://tweakcn.com/), utilizando a tipografia Roboto e uma paleta de cores elegante e moderna.

## Características Principais

### 🎨 Tipografia
- **Fonte Principal**: Roboto (Google Fonts)
- **Fonte Monospace**: Roboto Mono
- **Hierarquia**: Sistema de tamanhos bem definidos (h1-h6)
- **Legibilidade**: Otimizada para leitura em dispositivos digitais

### 🌈 Sistema de Cores

#### Cores Primárias
- **Primary 50-950**: Escala azul profissional (0ea5e9 → 082f49)
- **Neutral 50-950**: Escala de cinzas neutros para textos e fundos
- **Semânticas**: Success, Warning, Error para estados do sistema

#### Variáveis CSS
```css
:root {
  --primary-600: #0284c7;    /* Cor principal */
  --neutral-900: #171717;    /* Texto principal */
  --background: #fafafa;     /* Fundo da aplicação */
  --card: #ffffff;           /* Fundo dos cards */
}
```

### 🎭 Componentes Base

#### Button
- **Variantes**: Primary, Secondary, Outline, Ghost, Destructive
- **Tamanhos**: Small, Medium, Large
- **Estados**: Hover, Focus, Disabled

#### Card
- **Variantes**: Default, Elevated, Outlined
- **Estrutura**: Header, Title, Description, Content, Footer
- **Sombras**: Sistema de sombras consistente

#### Input
- **Variantes**: Default, Filled, Outlined
- **Estados**: Focus, Error, Helper Text
- **Acessibilidade**: Labels e mensagens de erro

### 🎬 Animações

#### Transições
- **Duração**: 200ms para interações básicas
- **Easing**: Ease-out para movimentos naturais

#### Keyframes
- **fadeIn**: Aparição suave
- **slideUp**: Deslizamento para cima
- **slideDown**: Deslizamento para baixo
- **scaleIn**: Escala com opacidade

### 📱 Responsividade

#### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

#### Grid System
- **Layout**: Flexbox e CSS Grid
- **Espaçamento**: Sistema de espaçamento consistente
- **Container**: Max-width com padding responsivo

## Estrutura de Arquivos

```
app/
├── components/
│   └── ui/
│       ├── Button.tsx      # Componente de botão
│       ├── Card.tsx        # Componente de card
│       ├── Input.tsx       # Componente de input
│       └── index.ts        # Exportações
├── globals.css             # Estilos globais e variáveis CSS
├── layout.tsx              # Layout principal com fontes
└── page.tsx                # Página de demonstração
```

## Uso dos Componentes

### Importação
```tsx
import { Button, Card, CardHeader, CardTitle, Input } from './components/ui';
```

### Exemplo de Uso
```tsx
<Card variant="elevated">
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
  </CardHeader>
  <CardContent>
    <Input label="Nome" placeholder="Seu nome" />
    <Button variant="primary">Enviar</Button>
  </CardContent>
</Card>
```

## Personalização

### Cores
Para alterar as cores, modifique as variáveis CSS em `globals.css`:

```css
:root {
  --primary-600: #sua-cor-aqui;
  --neutral-900: #sua-cor-aqui;
}
```

### Tipografia
Para alterar as fontes, modifique o `layout.tsx`:

```tsx
import { SuaFonte } from "next/font/google";

const suaFonte = SuaFonte({
  variable: "--font-sua-fonte",
  subsets: ["latin"],
});
```

## Acessibilidade

### Contraste
- **Texto**: Mínimo 4.5:1 para texto normal
- **Grande Texto**: Mínimo 3:1 para texto grande
- **Elementos UI**: Mínimo 3:1 para elementos interativos

### Foco
- **Ring**: Anel de foco visível em todos os elementos interativos
- **Tab Order**: Navegação por teclado lógica
- **ARIA**: Labels e descrições apropriadas

### Semântica
- **HTML5**: Uso correto de tags semânticas
- **Landmarks**: Header, Main, Footer, Section
- **Headings**: Hierarquia de títulos consistente

## Performance

### Otimizações
- **CSS Variables**: Reutilização eficiente de valores
- **Tailwind**: Purge automático de CSS não utilizado
- **Fonts**: Carregamento otimizado com `next/font`
- **Images**: Otimização automática com Next.js

### Bundle Size
- **CSS**: ~15KB gzipped
- **JavaScript**: Componentes tree-shakeable
- **Fonts**: Apenas pesos necessários carregados

## Compatibilidade

### Navegadores
- **Modern**: Chrome 90+, Firefox 88+, Safari 14+
- **Legacy**: Suporte básico para IE11+

### Dispositivos
- **Mobile**: iOS 12+, Android 8+
- **Desktop**: Windows 10+, macOS 10.14+

## Contribuição

### Padrões de Código
- **TypeScript**: Tipagem estrita
- **ESLint**: Regras de qualidade de código
- **Prettier**: Formatação consistente

### Componentes
- **Props Interface**: Definição clara de props
- **Default Values**: Valores padrão sensatos
- **Documentation**: Comentários explicativos

## Licença

Este sistema de design é parte do projeto SGEC App e segue as melhores práticas de design web moderno.

---

**Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS**
