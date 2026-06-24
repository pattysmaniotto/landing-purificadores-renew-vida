/* ============================================
   RENEW VIDA — Checkout
   Integração com backend via Pagar.me
   ============================================ */

// URL do backend (Render) — CONFIGURADO ✅
const BACKEND_URL = 'https://renew-vida-api.onrender.com';

const WHATSAPP_NUMERO = '5519953309849'; // Fallback se der erro

// ============================================
// FUNÇÃO PRINCIPAL DE CHECKOUT
// ============================================
async function comprarProduto(produtoId, produtoNome, produtoPreco) {
    // Mostrar loading no botão
    const botao = document.querySelector(`[data-produto-id="${produtoId}"]`);
    const textoOriginal = botao ? botao.textContent : '';
    if (botao) {
        botao.textContent = '⏳ Processando...';
        botao.style.pointerEvents = 'none';
    }

    try {
        // 1. Chamar backend pra criar checkout no Pagar.me
        // Controller permite cancelar a requisição se demorar muito
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 90000); // 90 segundos

        const response = await fetch(`${BACKEND_URL}/api/criar-checkout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                produto_id: produtoId,
                produto_nome: produtoNome,
                preco: produtoPreco
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        const data = await response.json();

        if (data.sucesso && data.checkout_url) {
            // 2. Redirecionar pro checkout do Pagar.me
            window.location.href = data.checkout_url;
        } else {
            throw new Error(data.erro || 'Erro ao processar checkout');
        }

    } catch (erro) {
        console.error('Erro no checkout:', erro);

        // Fallback: abre WhatsApp
        const mensagem = encodeURIComponent(
            `Oi! Tive interesse no produto:\n\n` +
            `📦 ${produtoNome}\n` +
            `💰 R$ ${produtoPreco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n\n` +
            `Pode me ajudar com a compra?`
        );
        alert('Não conseguimos processar o pagamento automático. Vou te redirecionar pro WhatsApp!');
        window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`, '_blank', 'noopener');

        // Restaurar botão
        if (botao) {
            botao.textContent = textoOriginal;
            botao.style.pointerEvents = '';
        }
    }
}

// ============================================
// LISTENER DOS BOTÕES
// ============================================
document.addEventListener('click', function(event) {
    const target = event.target.closest('.btn-comprar');
    if (target) {
        event.preventDefault();
        const produtoId = target.dataset.produtoId;
        const produtoNome = target.dataset.produtoNome;
        const produtoPreco = parseFloat(target.dataset.produtoPreco);

        comprarProduto(produtoId, produtoNome, produtoPreco);
    }
});