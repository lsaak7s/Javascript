/*
const isaac = {
    myAge: 17 + 1 - 6 + 3,
    myName: "🥲isaac",
    adress: {
        Rua: "Main St",
        City: "Anytown",
        State: "CA",
        Zip: "12345",
    }

}
isaac.myName = "Isaac7"
console.log(isaac)

const user = [
    { value: 10, myAge: 17, myName: "Isaac" },
    { value: 20, myAge: 18, myName: "John" },
    { value: 30, myAge: 19, myName: "Jane" },
    { value: 40, myAge: 20, myName: "Bob" },
    { value: 50, myAge: 21, myName: "Alice" },
    { value: 60, myAge: 22, myName: "Charlie" }

];

console.log(user[1]);

const media = 7
const notaAluno = 7

if (media >= notaAluno) {
    console.log("Aprovado")
}

else {
    console.log("Reprovado")
}

const senha = "123456"
const senhaDigitada = "123456"

if (senha == senhaDigitada) {
    console.log("Senha correta")
} else {
    console.log("Senha incorreta")
}

function HelloWorld() {

    console.log("Hello World")

}

HelloWorld()

const azul123 = document.querySelector("input")
azul123.placeholder = "Digite algo aqui..."
azul123.value = "Digite algo aqui........................"
console.log(azul123.placeholder)

const botton = document.querySelector("#azul123")

button.style.backgroundColor = "yellow"

function alertbutton(button) {
    alert("Button clicked!")

}

function digiteiNoInput() {
    console.log(input.value)
}

function aperteiNoButton() {
    console.log(input.value)

}

const select = document.querySelector("#select")

select.addEventListener("change", function () {
    console.log(select.value)
})

const value = Math.pow(5, 1)
console.log(value)
const value = Math.sqrt(125, 5)
console.log(value)
const value = Math.PI
console.log(value)
const value = Math.ceil(5.1)
console.log(value)
const value = Math.floor(5.1)
console.log(value)
const value = Math.random()
console.log(value)

let result = 10 + 5
result= 70
console.log(result)

const p = 10
const o = 20

if (p !== o) {
    console.log("p é diferente de o")
}
else{
    console.log("p é igual a o")
}

Operadores logicos
const senha = false
const token = false
const usuario = true

if (!(senha || token || usuario)) {
    console.log("Acesso permitido")
} else {
    console.log("Acesso negado")
}

const myObject = {
    nome: "Isaac",
    idade: 17,
    cidade: "São Paulo"
}
const my = "30"
 apaga um parametro
delete myObject.cidade
 typeof diz qual o tipo number string etc
console.log(typeof myObject)

const temp = 41

if (temp <= 33) {
    console.log("Esta com hiportemia")
}
else if (temp >= 34 && temp <= 40) {
    console.log("Esta Saudavel")
}
else if (temp >= 41 && temp <= 45) {
    console.log("Esta com febre")
} else if (temp >= 46) {
    console.log("Esta com muita febre")
}

Operador ternario
 ? = if 
 : = else
 && = else if (E tambem somente o IF)

const salario = 15000
salario <= 3000 ? console.log("junior") : salario >= 3000  && salario <=8000 ? console.log("pleno") : salario >= 8001  && salario <=15000 ? console.log("Senior") : console.log("Diretor") 

const temp = 10
switch (temp) {
    case 20:
        console.log("frio")
        break;
    case 30:
        console.log("medio")
        break;
    case 40:
        console.log("quente")
        break;
    case 50:
        console.log("slk")
        break;
    default: console.log("Não achei")
        break;
}

setTimeout( () =>  {
    console.log("Oi")
}, 3000);

let nunber = 0
setInterval(() => {
    console.log(nunber++)
}, 1000);
//Array
const users = [
  "maria1",
  "maria2",
  "maria3",
  "maria4",
  "maria5",
  "maria6",
  "maria7",
  "maria8",
];
    // inicialização    condição  Oque fazer no final
for (let i = 1; i < users.length; i++) {
 // length No Array ele vai pegar A quantidade Numerica ou as palavras
  console.log(users[i]);
}
for of 
ele para sozinho
const myname = "isaac"
const nomes = [ "joao", "jo", "ja",]
 o propio modo analizar que vira a variavel
for (const name of nomes) {
    console.log(name)
}


const user = { nome: "isaac", age: "20", street: "Rua Merachal" }
// for in ele pega chave ex nome,age,street
for (const key in user) {
    //Agora se quiser pegar o valor tambem 
    // usando desse jeito ele esta pegando os valores tambem 
    console.log(`${key} ${user[key]}`)

}
let i  = 0
console.log("name")
Ele verifica  depois faz
while (i < 1) {
    i++;
    console.log(i)
}
console.log("name")
faz e depois verifica  
let i = 0
do {
    i++
    console.log(i)

} while (i < 30);
const html = document.getElementById("htm")
const pessoas = [
    {
        nome: "Amanda",
        idade: 22,
        contato: "11987654321"
    },
    {
        nome: "Bruno",
        idade: 28,
        contato: "11991234567"
    },
    {
        nome: "Carla",
        idade: 19,
        contato: "11999887766"
    },
    {
        nome: "Diego",
        idade: 31,
        contato: "11995554433"
    },
    {
        nome: "Fernanda",
        idade: 25,
        contato: "11993332211"
    }
];
//foreach ele eo mais completo, porem ele não tem o braek
pessoas.forEach((element, index) => {
//Aqui e o templet string, junta texto com vatiavel
    console.log(`${index + 1} Nome: ${element.nome} idade: ${element.idade} contato: ${element.contato}`);
    html.innerHTML = (`${index + 1} Nome: ${element.nome} idade: ${element.idade} contato: ${element.contato}`);
});
parametros das funçoes é possivel colocar um valor padrao caso nao seja passado nenhum valor
function test(message, value = 0 ) {
    console.log(message, value)
}
test( "that`t Amazing" , 1)

function menos (value1 , value2){
    console.log(value1 - value2)
    console.log("o")
}
menos(10,20)
function mais (value1 , value2){
    console.log(value1 + value2)
}
mais(10,20)
function mult (value1 , value2){
    console.log(value1 * value2)
}
mult(10,20)
function div (value1 , value2){
    console.log(value1 / value2)
}
div(10,20)

Caixa de desconto, se o valor for maior que 30 ele tera desconto de 10% caso contrario nao tera desconto

const desconto = 0.10
const cart = [11, 30, 2, 41, 52]
Aqui ele vai separar os valores com desconto e sem desconto
const ComDesconto = []
const SemDesconto = []
Aqui ele vai fazer a verificação se o valor e maior que 30 ele vai aplicar o desconto e colocar no array ComDesconto caso contrario ele vai colocar no array SemDesconto
for (let i = 0; i < cart.length; i++) {
    if (cart[i] >= 30) {
     Ele vai dizer em qual possição ele estar [i]
        const test = cart[i] - (cart[i] * desconto);
        Aqui ele vai colocar o valor com desconto no array ComDesconto
        ComDesconto.push(test)
    }
    else {
        SemDesconto.push(cart[i])
    }
}

 let total = 0

for (let i = 0; i < ComDesconto.length; i++) {
A mesma coisa fazer total = total + o valor
    total += ComDesconto[i]
}

for (let i = 0; i < SemDesconto.length; i++) {
    total += SemDesconto[i]
}
Aqui ele vai arredondar o valor para baixo, caso queira arredondar para cima usar Math.ceil(total)
console.log(Math.floor(total))

const ArrowFunction = (value1, value2) => {
    return value1 + value2
}
console.log(ArrowFunction(10, 20))*/

