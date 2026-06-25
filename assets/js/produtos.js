/* ============================================
   RENEW VIDA — Lista de Produtos
   Estilo B (descritivo): Purificador RENEW [modelo] [capacidade]
   Preços: +30% sobre o fornecedor (arredondamento agressivo)
   ============================================ */

const PURIFICADORES = [
    {
        id: 'duo',
        nome: 'Purificador RENEW Duo Gelado',
        capacidade: 'Água natural e gelada • Lançamento',
        preco: 5690,
        precoOriginal: 5716,
        parcela: '12x de R$ 569,99',
        imagem: 'assets/img/duo.webp',
        descricao: 'Une água natural e gelada em um único equipamento, com alcalinização.'
    },
    {
        id: 'v-self-10l-premium',
        nome: 'Purificador RENEW Premium 10 Litros',
        capacidade: 'Reservatório de 10 litros',
        preco: 3799,
        precoOriginal: 3831,
        parcela: '12x de R$ 379,99',
        imagem: 'assets/img/v-self-10l-premium.webp',
        descricao: 'Remove cloro e impurezas, adiciona magnésio, cálcio e potássio.'
    },
    {
        id: 'terracota',
        nome: 'Purificador RENEW Cerâmica',
        capacidade: 'Design contemporâneo',
        preco: 4249,
        precoOriginal: 4286,
        parcela: '12x de R$ 424,99',
        imagem: 'assets/img/terracota.webp',
        descricao: 'Transforma a água da torneira em água alcalina ionizada.'
    },
    {
        id: 'v-self-10l',
        nome: 'Purificador RENEW Essencial 10 Litros',
        capacidade: 'Reservatório de 10 litros',
        preco: 3089,
        precoOriginal: 3116,
        parcela: '12x de R$ 308,99',
        imagem: 'assets/img/v-self-10l.webp',
        descricao: 'Mesma tecnologia premium em versão compacta.'
    },
    {
        id: 'v-self-6l-premium',
        nome: 'Purificador RENEW Premium 6 Litros',
        capacidade: 'Reservatório de 6 litros',
        preco: 3699,
        precoOriginal: 3701,
        parcela: '12x de R$ 369,99',
        imagem: 'assets/img/v-self-6l-premium.webp',
        descricao: 'Tecnologia premium em formato compacto, ideal para espaços menores.'
    },
    {
        id: 'terracota-gray',
        nome: 'Purificador RENEW Cerâmica Cinza',
        capacidade: 'Combo + Refil Nanno V',
        preco: 4249,
        precoOriginal: 4286,
        parcela: '12x de R$ 424,99',
        imagem: 'assets/img/terracota-gray.webp',
        descricao: 'Linha Cerâmica em versão cinza, com refil Nanno incluso.'
    },
    {
        id: 'v-self-6l',
        nome: 'Purificador RENEW Compact 6 Litros',
        capacidade: 'Reservatório de 6 litros',
        preco: 2969,
        precoOriginal: 2986,
        parcela: '12x de R$ 296,99',
        imagem: 'assets/img/v-self-6l.webp',
        descricao: 'Compacto e eficiente, perfeito para apartamentos.'
    },
    {
        id: 'v10-bebedouros',
        nome: 'Purificador RENEW Empresarial 10 Litros',
        capacidade: 'Modelo para bebedouros e escritórios',
        preco: 3089,
        precoOriginal: 3116,
        parcela: '12x de R$ 308,99',
        imagem: 'assets/img/v10-bebedouros.webp',
        descricao: 'Modelo específico para instalação em bebedouros e empresas.'
    },
    {
        id: 'flow-niion-click',
        nome: 'RENEW Flow Click',
        capacidade: 'Sistema click de troca rápida',
        preco: 4399,
        precoOriginal: 4416,
        parcela: '12x de R$ 439,99',
        imagem: 'assets/img/flow-niion-click.webp',
        descricao: 'Sistema de troca rápida com tecnologia avançada.'
    },
    {
        id: 'v6-bebedouros',
        nome: 'Purificador RENEW Empresarial 6 Litros',
        capacidade: 'Modelo compacto para empresas',
        preco: 2969,
        precoOriginal: 2986,
        parcela: '12x de R$ 296,99',
        imagem: 'assets/img/v6-bebedouros.webp',
        descricao: 'Versão compacta para bebedouros e escritórios.'
    }
];

const REFIS = [
    {
        id: 'refil-fresh-v',
        nome: 'Kit Refil RENEW Fresh V',
        capacidade: 'Compatível com linha V',
        preco: 589,
        precoOriginal: 594,
        parcela: '12x de R$ 58,99',
        imagem: 'assets/img/refil-fresh-v.webp',
        descricao: 'Tecnologia de tratamento e purificação de água.'
    },
    {
        id: 'refil-fresh-nanno-v',
        nome: 'Kit Refil RENEW Nanno V',
        capacidade: 'Cápsula extra de magnésio',
        preco: 749,
        precoOriginal: 750,
        parcela: '12x de R$ 74,99',
        imagem: 'assets/img/refil-fresh-nanno-v.webp',
        descricao: 'Potencializa o enriquecimento mineral da água.'
    },
    {
        id: 'refil-fresh',
        nome: 'Kit Refil RENEW Fresh',
        capacidade: 'Linha padrão',
        preco: 589,
        precoOriginal: 594,
        parcela: '12x de R$ 58,99',
        imagem: 'assets/img/refil-fresh.webp',
        descricao: 'Reposição padrão para purificadores RENEW.'
    },
    {
        id: 'refil-fresh-nanno',
        nome: 'Kit Refil RENEW Nanno',
        capacidade: 'Cápsula extra de magnésio',
        preco: 749,
        precoOriginal: 750,
        parcela: '12x de R$ 74,99',
        imagem: 'assets/img/refil-fresh-nanno.webp',
        descricao: 'Versão Nanno com enriquecimento mineral extra.'
    },
    {
        id: 'refis-flow-click',
        nome: 'Kit 4 Refis RENEW Flow',
        capacidade: 'Kit com 4 unidades',
        preco: 2899,
        precoOriginal: 2920,
        parcela: '12x de R$ 289,99',
        imagem: 'assets/img/refis-flow-click.webp',
        descricao: 'Kit com 4 refis para sistema Flow Click.'
    }
    // Removido: 4 Refis Reposição Flow Niion (esgotado no fornecedor)
];

// ============================================
// RENDERIZAÇÃO DOS CARDS DE PRODUTOS
// ============================================

function formatarPreco(valor) {
    return valor.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function criarCardProduto(produto) {
    const card = document.createElement('div');
    card.className = 'produto-card';

    const imagemHTML = produto.imagem
        ? `<img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">`
        : `<div class="produto-img-placeholder">💧</div>`;

    card.innerHTML = `
        <div class="produto-img">
            ${imagemHTML}
        </div>
        <div class="produto-info">
            <h3 class="produto-titulo">${produto.nome}</h3>
            <p class="produto-capacidade">${produto.capacidade}</p>
            <div class="produto-preco">
                <span class="produto-preco-antigo">R$ ${formatarPreco(produto.precoOriginal)}</span>
                R$ ${formatarPreco(produto.preco)}
            </div>
            <p class="produto-parcela">ou ${produto.parcela} com juros</p>
            <a href="#" class="btn-comprar" data-produto-id="${produto.id}" data-produto-nome="${produto.nome}" data-produto-preco="${produto.preco}">
                Comprar
            </a>
        </div>
    `;

    return card;
}

function renderizarProdutos() {
    const gridPurificadores = document.getElementById('grid-purificadores');
    const gridRefis = document.getElementById('grid-refis');

    if (gridPurificadores) {
        PURIFICADORES.forEach(produto => {
            gridPurificadores.appendChild(criarCardProduto(produto));
        });
    }

    if (gridRefis) {
        REFIS.forEach(produto => {
            gridRefis.appendChild(criarCardProduto(produto));
        });
    }
}

// Renderiza quando a página carregar
document.addEventListener('DOMContentLoaded', renderizarProdutos);