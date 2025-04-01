//declaraçoes e variaveis
var nome ="fiap";
console.log(nome)

let idade ="17";
console.log(idade)
const sobrenome ="cidade";
console.log(sobrenome)

let aula;
console.log(aula)
let valor= null;
console.log(valor)
let exemplo1={};

let exemplo2=[];
// tipos variaveis
let exemplo3 =10;
console.log(typeof exemplo3)

let exemplo4="aula"
console.log(typeof exemplo4)

let exemplo5 =true;
console.log(typeof exemplo5)

let exemplo6 =["huguinho","zezinho","luizinho"]
console.log(typeof exemplo6)


//conversoes
//float=> inteiro

let numfloat =123.456;
console.log(parseInt(numfloat))


//string=> float
let numstring ="547.987";
console.log(parseFloat(numstring))
//float=> dtring
let numfloat1 =554.665
console.log(numfloat1.toString())


let numInt=100;
console.log(numInt.toString())


//metodos Parte 1 

//Length-Verifica o tamanho da string
let frase ="o mundo da tecnologia";
console.log(frase.length)

//indexOf - retorna um trecho de um texto 
let texto="programaçao sustentavel";  
console.log(texto.lastIndexOf("a"))

// slice - retorna parte de um texto apontando um inicio e um final
let info = "processamento de ponta"
console.log(info.slice(0,13))

// operadores aritimeticos

const num1=10;
const num2=20;
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)

// operadores logicos

const num3 =20
const num4 = 30

console.log(num3<num4)
console.log(num3>num4)
console.log(num3<num4&& num4<50)
console.log(num3>num4||num4>num3)
console.log(num3==num3||num4<=num3)

