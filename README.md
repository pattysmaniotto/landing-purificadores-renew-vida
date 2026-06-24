# Landing Page — Purificadores RENEW VIDA

> **Status:** ✅ Pronta pra subir
> **Última atualização:** 18/06/2026
> **Hospedagem:** Netlify

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

## 🚀 Como subir pra Netlify (passo a passo)

### Opção 1 — Arrastar e soltar (MAIS FÁCIL) ⭐

1. Abra no navegador: **https://app.netlify.com/drop**
2. Loga com sua conta (ou cria uma de graça com email)
3. **Arraste a pasta inteira `landing-page-filtros`** pra cima da área de drop
4. Espera uns segundos (10-30s)
5. Pronto! Aparece uma URL tipo `https://random-name-123.netlify.app`
6. **(Opcional)** Clique em "Domain settings" pra mudar o nome ou conectar domínio próprio

### Opção 2 — Conectar com GitHub (mais profissional)

1. Crie um repositório no GitHub (Patricia pode me chamar que eu ajudo)
2. Suba todos os arquivos dessa pasta pro repositório
3. No Netlify: "Add new site" → "Import from Git" → escolha o repositório
4. Configure: Branch = `main`, Build command = (vazio), Publish directory = `.`
5. Deploy automático!

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
| ✅ Landing page de telemedicina | No ar (Netlify) |
| ✅ Landing page de purificadores | **PRONTA PRA SUBIR** (esse arquivo) |
| ⏳ Sistema WhatsApp automático | Aguardando aprovação Meta |
| ⏳ Robô de monitoramento | Pronto pra codar |
| ⏳ Backend (Render) | Aguardando tokens |