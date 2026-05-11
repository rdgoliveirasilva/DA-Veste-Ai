# D/A Veste Ai - Site de Moda Contemporânea

## Descrição

Um site moderno de e-commerce de roupas com design minimalista em **preto e branco**, criado com HTML5, CSS3 e JavaScript vanilla. O design é responsivo e segue as tendências atuais de fashion e design web.

## Características

✨ **Design Elegante**
- Paleta de cores: Preto e Branco
- Layout limpo e minimalista
- Tipografia moderna e sofisticada

📱 **Responsivo**
- Design mobile-first
- Suportado em desktop, tablet e smartphone
- Breakpoints otimizados para todas as resoluções

🛍️ **Funcionalidades**
- Navegação suave
- Seção de produtos em destaque
- Coleção feminina categorizada
- Dicas de moda e tendências
- Newsletter para inscrição
- Formulário de contato
- Links de redes sociais
- Carrinho de compras (demonstração)

⚡ **Performance**
- Carregamento rápido
- Otimizado para SEO
- Animações suaves
- Ícones do Font Awesome

## Estrutura do Projeto

```
DA Veste Ai Website/
├── index.html           # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentação (este arquivo)
```

## Como Usar

### 1. Abrir o Site

Simplesmente abra o arquivo `index.html` em seu navegador:

```
Duplo clique em index.html
OU
Clique com botão direito > Abrir com navegador
```

### 2. Navegar pelo Site

- **Topo**: Navegação rápida para as principais seções
- **Hero**: Convite principal com Call-to-Action
- **Loja**: Produtos em destaque
- **Mulher**: Coleção feminina
- **Dicas**: Dicas de moda e tendências
- **Contato**: Informações e formulário de contato

### 3. Interagir

- Adicione produtos ao carrinho (demonstração)
- Inscreva-se na newsletter
- Envie mensagens de contato
- Acesse redes sociais

## Seções

### 🏠 Início (Hero Section)
Banner principal com mensagem "ENCONTRE SEU ESTILO" e call-to-action para compras.

### 🛒 Loja (Featured)
Exibe 4 produtos principais com:
- Imagem/ícone do produto
- Nome
- Preço
- Botão adicionar ao carrinho

### 👗 Mulher (Collection)
Categorias da coleção feminina:
- Vestidos
- Tops & Blusas
- Shorts & Saias

### 💡 Dicas de Moda
Artigos com dicas sobre:
- Combinações clássicas
- Tendências 2026
- Estilo pessoal

### 📧 Newsletter
Inscrição para receber ofertas exclusivas e 10% de desconto.

### 📞 Contato
- Informações de contato
- Redes sociais
- Formulário de contato direto

### 📄 Rodapé
Links rápidos, informações legais e créditos.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos e layout responsivo
- **JavaScript**: Interatividade
- **Font Awesome 6.4**: Ícones
- **Google Fonts**: Tipografia (via Segoe UI nativa)

## Cores

### Paleta Principal
- **Preto Principal**: `#000000`
- **Preto Escuro**: `#1a1a1a`
- **Branco**: `#ffffff`
- **Cinza Claro**: `#f5f5f5`, `#f9f9f9`
- **Cinza Médio**: `#666666`
- **Cinza Texto**: `#999999`

## Personalizações

### Adicionar Novos Produtos
Edite o `index.html` na seção `.products-grid`:

```html
<div class="product-card">
    <div class="product-image">
        <i class="fas fa-shirt"></i>
    </div>
    <h3>Nome do Produto</h3>
    <p class="price">R$ 00,00</p>
    <button class="btn-add">Adicionar ao Carrinho</button>
</div>
```

### Mudar Cores
Abra `styles.css` e altere as variáveis de cor:
- Procure por `#000`, `#1a1a1a`, `#fff`, etc.
- Substitua pelos códigos desejados

### Adicionar Imagens Reais
Substitua os ícones do Font Awesome por imagens:

```html
<div class="product-image">
    <img src="caminho/para/imagem.jpg" alt="Descrição">
</div>
```

E ajuste o CSS:
```css
.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## Futuros Melhoramentos

- [ ] Sistema de carrinho funcional com localStorage
- [ ] Página de produto detalhado
- [ ] Filtros e busca
- [ ] Sistema de login/cadastro
- [ ] Integração com API de pagamento
- [ ] Galeria de produtos com zoom
- [ ] Comentários e avaliações
- [ ] Página de blog
- [ ] Chat de atendimento
- [ ] Aplicativo mobile (PWA)

## Compatibilidade

✅ Chrome (versão 90+)
✅ Firefox (versão 88+)
✅ Safari (versão 14+)
✅ Edge (versão 90+)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Licença

Este projeto é de uso livre para fins educacionais e comerciais.

## Contato

**D/A Veste Ai**
- 📧 Email: contato@davestea.com
- 📱 Telefone: (11) 9999-9999
- 📍 Localização: São Paulo - SP, Brasil

---

**Criado com ❤️ para a D/A Veste Ai**
© 2026 Todos os direitos reservados.
