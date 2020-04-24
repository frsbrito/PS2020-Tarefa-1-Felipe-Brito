// Declaração de array de objetos "pessoa" e instanciação
let pessoa = [
    {nome:"Pedro", curso:"Engenharia da Computação", idade:20},
    {nome:"Ana", curso:"Engenharia da Computação", idade:17},
    {nome:"Paulo", curso:"Engenharia da Computação", idade:23, republica: "República Orfanato"},
    {nome:"Armando", curso:"Engenharia da Computação", idade:17, republica: "República Orfanato"},
    {nome:"André",
        checarIDs: function(pessoa) {
            if(pessoa.idade>=18)
                return pessoa.nome + " pode tomar cerveja";
            else
                return pessoa.nome + " vai tomar Coca-Cola";
        }
}];

// Declaração de array de objetos "cursoUfop" (equivalente a "Universidade"
// pedido no exercício) e instanciação
var cursoUfop = [
    {curso:"Engenharia da Computação", cargaHoraria:3630, quantPeriodos:10},
    {curso:"Sistemas de Informação", cargaHoraria:3000, quantPeriodos:8},
    {curso:"Engenharia Elétrica", cargaHoraria:3660, quantPeriodos:10},
    {curso:"Engenharia de Produção", cargaHoraria:3610, quantPeriodos:10}
];

// Declaração de array de objetos "republica" e instanciação
var republica = [ 
    {nome:"República Orfanato", idade:10, quantMoradores:5},
    {nome:"Erva Doce", idade:5, quantMoradores:4},
    {nome:"Vira-Lata", idade:12, quantMoradores:5}
];

// laço de repetição for iterando chama de console 
// com método para checar idade passando posição do array de objetos
for(var i=0; i<pessoa.length-1; i++){
    console.log(pessoa[4].checarIDs(pessoa[i]));
}
