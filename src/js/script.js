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

let num7 =20;
let num5 =30;
console.log(num7<num5)
console.log(num7>num5)
console.log(num7<num5&& num5<50)
console.log(num7>num5||num7>num5)
console.log(num7=num5||num5<=num7)


// operadores de comparaçao

let num10 =25;
let num9 =35;
console.log(num9==num10)// compara
console.log(num9=== num10) // compara e verifica o tipo da variavel
console.log(num9!= num10)// diferente

// estrutura condicional

//IF

let valor1 = 100
if (valor1 == 100){
    console.log("é verdadeiro")
}

if(true){
console.log("é verdadeiro")
}


// if else
let valor2= 100
if(valor2 == 100){
    console.log("valor correto")

}else{
    console.log("valor errado")
}
if(valor2 == 101){
    console.log("valor correto")

}else{
    console.log("valor errado")
}

//if/else encadeado ou aninhado 

let idade2 = 13
let idade3 =14

if(idade3<14){
    console.log("Não pode entrar na balada")

}
else if(idade3>=14 && idade3<18){
    console.log("Pode entrar na balada")

}
else{
console.log("Não pode entrar na balada")
}

// condiçao ternaria

let valor99 = 300;

let resultado = valor99 == 300 ? "certo" : "errado";
console.log(resultado)
