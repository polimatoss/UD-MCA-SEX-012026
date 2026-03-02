// Parte 1 – Array Simples
// Array com pelo menos 20 elementos diferentes (nomes de times de futebol)

let times = [
    'Flamengo',            // 0
    'Palmeiras',           // 1
    'São Paulo',           // 2
    'Corinthians',         // 3
    'Santos',              // 4
    'Grêmio',              // 5
    'Internacional',       // 6
    'Atlético Mineiro',    // 7
    'Cruzeiro',            // 8
    'Vasco',               // 9
    'Botafogo',            // 10
    'Bahia',               // 11
    'Fortaleza',           // 12
    'Ceará',               // 13
    'Fluminense',          // 14
    'Athletico Paranaense',// 15
    'Bragantino',          // 16
    'Juventude',           // 17
    'Sport',               // 18
    'Chapecoense',         // 19
    'Coritiba'             // 20
];

// =====================================================
// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
// =====================================================
console.log('=== Pergunta A ===');
console.log('Posição 0:', times[0]);
console.log('Posição 7:', times[7]);
console.log('Posição 11:', times[11]);
console.log('Posição 15:', times[15]);
console.log('Posição 18:', times[18]);
console.log('Posição 20:', times[20]);

// =====================================================
// B. Qual elemento está na penúltima e última posição?
// =====================================================
console.log('\n=== Pergunta B ===');
console.log('Penúltima posição (' + (times.length - 2) + '):', times[times.length - 2]);
console.log('Última posição (' + (times.length - 1) + '):', times[times.length - 1]);

// =====================================================
// C. Quantos elementos existem no array?
// =====================================================
console.log('\n=== Pergunta C ===');
console.log('Quantidade de elementos:', times.length);

// =====================================================
// D. Adicione um novo elemento ao final do array.
// =====================================================
console.log('\n=== Pergunta D ===');
times.push('Seleção Brasileira');
console.log('Novo elemento adicionado: Seleção Brasileira');
console.log('Nova quantidade de elementos:', times.length);

// =====================================================
// E. Imprima todos os elementos usando um for.
// =====================================================
console.log('\n=== Pergunta E ===');
console.log('Todos os elementos do array:');
for (let i = 0; i < times.length; i++) {
    console.log('Posição ' + i + ': ' + times[i]);
}
