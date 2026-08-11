//console.log('Hello, World!') para empri algo ussa se node (nome do projeto)


let x = 9; // let pode ser modificado

const pi = 3.14; // Const não pode ser modificado

/*
console.log(x);

//modificando a variavel x

x = 18;

console.log(x);
console.log(pi);

*/

// Operações //

/*

let y = x + pi;

console.log(y);

y = x - pi;

console.log(y);

y = x * pi;

console.log(y);

y = x / pi;

console.log(y);

y = x ** pi;

console.log(y);

y = x ** 0.5;

console.log(y);

y = pi ** 0.5;

console.log(y.toFixed(3));/* O toFixed(x) é usado para a redondar um determinado valor de ponto flutunate, convertendo esse valor para uma
string.
[x, representa a quantidade de casas decimais que irão ter]*/

/* y = y.toFixed(3);

console.log(parseFloat(y)) /* para converter uma string em float usa-se o parseFloat */

/* Condicionais e Boolean */

const numero = 0;
const numero_par = numero % 2 === 0; /* === compara apenas valores do mesmo tipo, == compras valores apos tentar convertelos
para o mesmo tipo*/

if (numero_par) {
    console.log(numero_par, 'é um número PAR !!!')
} else{
    console.log(numero_par, 'não é um número par!')
}

/*
if (!numero_par){
    console.log(numero_par, "não é um número par!") // A ("!"numero_par) é uma negação
}
*/

const numero_01 = 0;
const numero_02 = numero_01 === 0;
const is_numero_divisivel_por_5 = (numero_01 % 5) === 0;// O prefixo is sinbolisa um valor boliano (é ou não é, verdadioro ou Falso, etc.)

if(numero_02){
    console.log('Neutro');
} else if (is_numero_divisivel_por_5) {
    console.log('Sim');
} else {
    console.log('Não');
}

/* Função em javaEscript */

// Funções são blocos de codigo que posso chamar a qualquer momento

// Sintaxe da é "function" e depois coloca o nome que você deseja

// Ex:

function teste(/*Onde ficam os parametros de uma função*/) {
    console.log('Teste');
}

teste();

// Ex2:

function sayMyName(name) {
    console.log("Your name is: " + name);
}

sayMyName("Otávio");

// Ex3: 

function quadrado(valor) {
    return /* return vai retornar um valor mais de uma vez*/ valor * valor;
}

/* const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez); OU*/

console.log(quadrado(10));

// também pode fazer isso

console.log(quadrado(10) + quadrado(10));

// Exemplo pratico
function incrementarJuros(valor, percentual) {
    const valorDeAcrecimento = (percentual / 100) * valor;
    return valor * valorDeAcrecimento;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 20));
console.log(incrementarJuros(100, 30));

/* todos os codigos que for feito vai ser colocado dentro de uma função e essa
função vai ser chamada de main, por exemplo: */

function main() {
    console.log("Hello, World!")
}

main();

/* A função main é a função principal e tadas as outras vão ser colocadas dentro
da main e seram chamadas de funções auxiliares, por exemplo: */

function calculadaora(valor) {
    return valor + 10
}

function main2() {
    console.log(calculadaora(5));
}

main2();

// Exemplo pratico:

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {

        return 'Abaixo do peso';

    } else if (imc >= 18.5 && imc < 25) {

        return 'Peso normal';

    } else if (imc >= 25 && imc < 30) {

        return 'Acima do peso';

    } else if (imc >= 30 && imc < 40) {

        return 'Obesidade';

    } else if (imc >= 40) {

        return 'Obesidade Grave';
    }
}

function main3() {
    const peso = 190;
    const altura = 1.80;

    const imc = calcularIMC(peso, altura);

    console.log(classificarImc(imc));

} main3();

/* Em javaEscript as funções são como um objeto, que pode ser manipulado como uma
String, int, float, etc. Um Exemplo */

function main4() {
    console.log('Olá')

} //console.log(main4);

main4 = function() {
    console.log(9);
} 

main4();

/* JavaScript com Programação Orientada a Obejeto!
organiza o código agrupando dados e comportamentos em objetos,
baseando-se em quatro pilares: abstração, encapsulamento, herança e polimorfismo.*/

/* A sua sintaxe é bem siples, primeiro você dis se ela é uma const ou let como se
estivesse criando uma variavel a unica diferença é que enves de colocar uma valor
vai criar algo parecido como uma função. Por Exemplo: */

/* const otavio = {

} */

/* Nesse casu entedemos que o Obejeto é uma coleção de valores os agrupando. E
funciona através de chave e valor. Um exemplo: */

const otavio = {
    nome: 'Otávio Do Carmo Neto',
    idade: 19,
};

console.log(otavio.nome);
console.log(otavio.idade);

// Também pode dinamizar esse Objeto!

otavio.altura = 1.83;

// Da para apagar caracteristicas desse Obejeto

delete otavio.nome;

console.log(otavio);

// Da para usar frunções dentro de um objeto, que são os seus metodos!

const pessoa1 = {
    nome: 'Otávio',
    idade: 20,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é de ${this.idade} anos`);
    }
};

/* pessoa.descrever = function () { // sobre escreve a função que está dentro do Objeto
    console.log(`Meu nome é ${this.nome}`)
}; */

pessoa1.descrever();

// Tem como acessar os valores de um objeto através de uma sintaxe mas dinâmica!
// Ex:

const atributo = "Idade";

console.log(pessoa1[atributo]); /* Se você reparar estamos acessando dinamicamente o
o atributo através de uma String. Isso faz que agente consiga fazer um codigo mais
dinamico. */

/* CLASSES é uma forma de dinamizar um objeto. E a sua função é definar quias são
as caracteristicas principais de um objeto e que ira se repetir durante o codigo,
Resumindo classe é a definição de um objeto em quanto uma instacia é a ocorrencia. */
class Pessoa {

    nome;
    idade;

    descrever (params) { // como se fosse um tostring
        console.log(`Meu nome é ${this.nome} e minha idade é de ${this.idade} anos`);
    }
}

// Instanciando a classe pessoa:

const neto = new Pessoa();
neto.nome = 'Otávio';
neto.idade = 20;

const dinara = new Pessoa();
dinara.nome = 'Dinara';
dinara.idade = 45;

console.log(neto);
console.log(dinara);

neto.descrever();
dinara.descrever();