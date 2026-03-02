// Parte 2 – Objeto
// Crie um objeto com: nome, cor, preco, estoque

let produto = {
    nome: 'Camisa Oficial do Flamengo',
    cor: 'Vermelho e Preto',
    preco: 249.90,
    estoque: 120
};

// =====================================================
// A. Como acessar o nome do objeto?
// =====================================================
console.log('=== Pergunta A ===');
console.log('Nome do objeto (notação de ponto):', produto.nome);

// =====================================================
// B. Como acessar o preço usando colchetes?
// =====================================================
console.log('\n=== Pergunta B ===');
console.log('Preço do objeto (notação de colchetes):', produto['preco']);

// =====================================================
// C. Atualize o estoque para 80.
// =====================================================
console.log('\n=== Pergunta C ===');
console.log('Estoque antes da atualização:', produto.estoque);
produto.estoque = 80;
console.log('Estoque após a atualização:', produto.estoque);

// =====================================================
// D. Imprima todas as propriedades no console.
// =====================================================
console.log('\n=== Pergunta D ===');
console.log('Todas as propriedades do objeto:');
for (let propriedade in produto) {
    console.log(propriedade + ': ' + produto[propriedade]);
}
