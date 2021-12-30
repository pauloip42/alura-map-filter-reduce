const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

// Tenho que exibir as seguintes informações:

// Empresas criadas depois dos anos 2000.
// O nome de cada empresa e de seu CEO.
// O valor de todas as empresas somadas.


//FILTER
const anoDeCriacao = empresas.filter(empresa => (empresa.anoDeCriacao));
console.log(anoDeCriacao);

//MAP
const exibeInformacoes = empresas.map(empresa => `${empresa.nome}` + ' CEO: ' + `${empresa.CEO}`);
console.log(exibeInformacoes);

//REDUCE
const total = empresas.reduce((resultado, quantidade) => {
    return (resultado + quantidade.valorDeMercado);
}, 0);

console.log("Total: " + `${total}`);
