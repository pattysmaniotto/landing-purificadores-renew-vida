# Landing Page — Purificadores RENEW VIDA

> **Status:** ✅ Online
> **Última atualização:** 24/06/2026
> **Hospedagem:** Render (Static Site, plano Free)
> **URL de produção:** https://landing-purificadores-renew-vida.onrender.com
> **Repositório:** https://github.com/pattysmaniotto/landing-purificadores-renew-vida

---

## 📋 O que tem aqui

Esta é a landing page de vendas dos **purificadores de água** da RENEW VIDA.

- ✅ 10 purificadores listados
- ✅ 5 refis listados (1 está esgotado no fornecedor)
- ✅ Design com a paleta da marca (dourado + verde-teal)
- ✅ Botão "Comprar" → abre WhatsApp com mensagem pré-prenchida
- ✅ Botão WhatsApp flutuante sempre visível
- ✅ Escondida do Google (noindex)
- ✅ Responsiva (funciona no celular)

---

## 🔄 Como funciona o deploy automático

**Toda vez que eu (Claude) salvar uma mudança aqui na pasta → site atualiza em ~30 segundos.** Você não precisa fazer nada.

O fluxo é:
1. Mudança é commitada localmente
2. Push pro GitHub (`pattysmaniotto/landing-purificadores-renew-vida`)
3. Render detecta automaticamente e faz o deploy
4. URL pública atualiza sozinha

**Pra Patricia:** é só me pedir a mudança aqui no chat (ex: "troca a foto do produto X", "adiciona o refil Y", "muda o texto do FAQ") que eu cuido de tudo.

---

## 🔧 O que tá configurado

### Meta tag noindex ✅
```html
<meta name="robots" content="noindex, nofollow">
<meta name="googlebot" content="noindex, nofollow">
```
A página **NÃO aparece no Google**. Só quem tem o link acessa.

### Botão de comprar → WhatsApp
Por enquanto, clicar em "Comprar" abre o WhatsApp com mensagem automática. A Patricia fecha a venda manualmente.

### Quando o backend ficar pronto
Vou trocar o botão de comprar pra abrir popup do Pagar.me (pagamento 100% automático).

---

## 📦 Estrutura de arquivos

```
landing-page-filtros/
├── index.html              ← página principal
├── README.md               ← este arquivo
└── assets/
    ├── css/
    │   └── styles.css      ← todo o visual
    ├── js/
    │   ├── produtos.js     ← lista de 16 produtos
    │   └── checkout.js     ← integração (WhatsApp por enquanto)
    └── img/
        └── logo.png        ← COPIE o logo.png da pasta pai!
```

---

## ⚠️ IMPORTANTE — Logo

A página faz referência a `assets/img/logo.png`. **Copie o arquivo `logo.png` da pasta pai** (`CLIENTES/RENEW VIDA/assets/logo.png`) pra essa pasta:

```
De:    CLIENTES/RENEW VIDA/assets/logo.png
Para:  CLIENTES/RENEW VIDA/landing-page-filtros/assets/img/logo.png
```

Sem isso, a página fica sem o logo da RENEW VIDA no header.

---

## 📸 Adicionando fotos dos produtos (opcional)

Por enquanto, os cards mostram um emoji 💧 no lugar da foto.

Quando quiser adicionar fotos reais:
1. Salve as fotos em `assets/img/` com nomes tipo `duo.jpg`, `v-self-10l.jpg`, etc.
2. Edite o arquivo `assets/js/produtos.js`
3. Em cada produto, mude `imagem: null` pra `imagem: 'assets/img/duo.jpg'` (etc)

---

## 📞 Contato configurado

Todos os pontos de contato na página usam:
- **WhatsApp:** +55 (19) 95330-9849
- **Mensagem padrão:** "Oi! Tenho interesse nos purificadores RENEW VIDA..."

Se precisar mudar, edite em 3 lugares:
- `index.html` (botão header, botão CTA final, botão flutuante)
- `assets/js/checkout.js` (constante `WHATSAPP_NUMERO`)

---

## 🔄 Próximas atualizações

| O que | Quando | Como |
|---|---|---|
| Integração Pagar.me (popup automático) | Quando backend ficar pronto | Eu atualizo aqui |
| Adicionar fotos reais | Quando Patricia tiver | Patricia me manda |
| Domínio próprio (renewvida.com.br/filtros) | Quando Patricia quiser | Patricia me chama |

---

## 📊 Status do projeto maior

| Coisa | Status |
|---|---|
| ✅ Landing page de telemedicina | No ar (Netlify — **migrar pro Render em breve**) |
| ✅ Landing page de purificadores | **Online (Render)** — https://landing-purificadores-renew-vida.onrender.com |
| ⏳ Sistema WhatsApp automático | Aguardando aprovação Meta |
| ⏳ Robô de monitoramento | Pronto pra codar |
| ⏳ Backend (Render) | Aguardando tokens |