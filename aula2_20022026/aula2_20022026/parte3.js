// Parte 3 – Array de Objetos
// Array com pelo menos 10 objetos contendo: nome, preco, estoque

let produtos = [
    { nome: 'Camisa Oficial Flamengo',        preco: 249.90, estoque: 120 },
    { nome: 'Camisa Oficial Palmeiras',       preco: 239.90, estoque: 95  },
    { nome: 'Bola Oficial Champions League',  preco: 199.90, estoque: 60  },
    { nome: 'Chuteira Nike Mercurial',        preco: 599.90, estoque: 40  },
    { nome: 'Meião Esportivo',                preco: 39.90,  estoque: 300 },
    { nome: 'Shorts Futebol Adidas',          preco: 89.90,  estoque: 150 },
    { nome: 'Luvas de Goleiro Profissional',  preco: 149.90, estoque: 80  },
    { nome: 'Agasalho Seleção Brasileira',    preco: 329.90, estoque: 50  },
    { nome: 'Boné Oficial Corinthians',       preco: 79.90,  estoque: 110 },
    { nome: 'Camisa Retrô Santos',            preco: 199.90, estoque: 70  },
    { nome: 'Bola Society Penalty',           preco: 129.90, estoque: 200 },
    { nome: 'Caneleira Profissional',         preco: 59.90,  estoque: 180 }
];

// =====================================================
// A. Qual é o preço do segundo objeto?
// =====================================================
console.log('=== Pergunta A ===');
console.log('Preço do segundo objeto (' + produtos[1].nome + '):', 'R$ ' + produtos[1].preco.toFixed(2));

// =====================================================
// B. Qual é o nome do terceiro objeto?
// =====================================================
console.log('\n=== Pergunta B ===');
console.log('Nome do terceiro objeto:', produtos[2].nome);

// =====================================================
// C. Quantos itens existem no array?
// =====================================================
console.log('\n=== Pergunta C ===');
console.log('Quantidade de itens no array:', produtos.length);

// =====================================================
// D. Imprima o nome de todos os objetos.
// =====================================================
console.log('\n=== Pergunta D ===');
console.log('Nome de todos os objetos:');
for (let i = 0; i < produtos.length; i++) {
    console.log((i + 1) + '. ' + produtos[i].nome);
}

// =====================================================
// E. Some o total de estoque de todos os objetos.
// =====================================================
console.log('\n=== Pergunta E ===');
let totalEstoque = 0;
for (let i = 0; i < produtos.length; i++) {
    totalEstoque += produtos[i].estoque;
}
console.log('Total de estoque de todos os objetos:', totalEstoque);

// =====================================================
// F. Qual objeto possui maior estoque?
// =====================================================
console.log('\n=== Pergunta F ===');
let maiorEstoque = produtos[0];
for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].estoque > maiorEstoque.estoque) {
        maiorEstoque = produtos[i];
    }
}
console.log('Objeto com maior estoque:');
console.log('  Nome:', maiorEstoque.nome);
console.log('  Preço: R$', maiorEstoque.preco.toFixed(2));
console.log('  Estoque:', maiorEstoque.estoque);
