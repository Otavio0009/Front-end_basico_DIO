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

console.log(y.toFixed(3));/* Para é redondar um determinado valor de ponto flutunate usa-se toFixed(x)
[x, representa a quantidade de casas decimais que irão ter]*/

/* y = y.toFixed(3);

console.log(parseFloat(y))/*para converter uma string em float usa-se o parseFloat*/

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