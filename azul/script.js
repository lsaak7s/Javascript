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

                                                             //Operadores logicos
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

                                      //delete, apaga um parametro  myObject.cidade typeof diz qual o tipo number string etc

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

                                                                   //Operador ternario
                                               ? = if / : = else / && = else if (E tambem somente o IF)



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

                                 //setTimeout() Executa uma vez depois de um tempo "Faça isso daqui a 3 segundos"

setTimeout( () =>  {
    console.log("Oi")
}, 3000);

                              //setInterval() Executa repetidamente a cada intervalo "Faça isso a cada 3 segundos"

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

                                              //length, No Array ele vai pegar quantos itens tem

  console.log(users[i]);
}

                                                             //for of, ele para sozinho

const myname = "isaac"
const nomes = [ "joao", "jo", "ja",]

                                                  //for o propio modo analizar que vira a variavel

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

                                                       //while, Ele verifica  depois faz

while (i < 1) {
    i++;
    console.log(i)
}
console.log("name")

                                                        //do while, faz e depois verifica

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

                         //parametros das funçoes é possivel colocar um valor padrao caso nao seja passado nenhum valor

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

                     //Caixa de desconto, se o valor for maior que 30 ele tera desconto de 10% caso contrario nao tera desconto

const desconto = 0.10
const cart = [11, 30, 2, 41, 52]

                                          //Aqui ele vai separar os valores com desconto e sem desconto

const ComDesconto = []
const SemDesconto = []

//Aqui ele vai fazer a verificação se o valor e maior que 30 ele vai aplicar o desconto e colocar no array ComDesconto caso contrario ele vai colocar no array SemDesconto

for (let i = 0; i < cart.length; i++) {
    if (cart[i] >= 30) {

                                                  // Ele vai dizer em qual possição ele estar [index]

        const test = cart[i] - (cart[i] * desconto);

                                     //push, ele vai colocar o valor com desconto no array ComDesconto

        ComDesconto.push(test)
    }
    else {
        SemDesconto.push(cart[i])
    }
}

 let total = 0

for (let i = 0; i < ComDesconto.length; i++) {
                                              //A mesma coisa fazer total = total + o valor
    total += ComDesconto[i]
}

for (let i = 0; i < SemDesconto.length; i++) {
    total += SemDesconto[i]
}
                  //Aqui ele vai arredondar o valor para baixo, caso queira arredondar para cima usar Math.ceil(total)
console.log(Math.floor(total))

const ArrowFunction = (value1, value2) => {
    return value1 + value2
}
console.log(ArrowFunction(10, 20))


                                                       Map return Filter


                                //Map ele vai percorrer o array e fazer a operação que voce colocar

const number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = number.map((value) => { return value * 2 })
console.log(result)

const list = [
    { name: "Isaac", vip: true },
    { name: "John", vip: false },
    { name: "Jane", vip: true },
    { name: "Bob", vip: false },
    { name: "Alice", vip: true },
    { name: "Charlie", vip: false },
]

const newlist = list.map((user) => {
    return {
        name: user.name,
        bracelet: user.vip ? "preto" : "azul"

    }

})
console.log(newlist)

const list = [
    { name: "Isaac", nota: 5 },
    { name: "John", nota: 5 },
    { name: "Jane", nota: 1 },
    { name: "Bob", nota: 7 },
    { name: "Alice", nota: 3 },
    { name: "Charlie", nota: 0 },
]
const newlist = list.map((user) => {
    return {
        name: user.name,
        nota: user.nota >= 5 ? "Aprovado" : "Reprovado"
    }
})

console.log(newlist)

//reduce ele vai percorrer o array e fazer a operação que voce colocar, porem ele vai retornar um unico valor, diferente do map que retorna um array

const compras = [
    { name: "Arroz", price: 5.6 , kg: 1},
    { name: "feijão", price: 5.1 , kg: 2},
    { name: "açucar", price: 1.4 , kg: 3},
    { name: "carne", price: 7.7 , kg: 4},
    { name: "frutas", price: 3.9 , kg: 5},
    { name: "verduras", price: 0.1 , kg: 6},
]

const total = compras.reduce((acc, user) => {
const value = user.price * user.kg
return acc + value
}, 0)
console.log(`Total: R$ ${total.toFixed(2)}`)

//filter ele vai percorrer o array e fazer a operação que voce colocar, porem ele vai retornar um novo array com os valores que passaram na condição, diferente do map que retorna um array com todos os valores, e do reduce que retorna um unico valor

const list = [20, 300, 40, 500, 600, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
const newList = list.filter((value) => {
    if (value > 100 && value % 2 === 0) {
        return true
    }
    else{
        return false
    }
})
console.log(newList)

                                        //Valorizadas

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'TimCook', foundedOn: 1976 }
];

const marketValueOldCompany = companies.map(Company => {
     Company.marketValue = Company.marketValue + (Company.marketValue / 10)
    return Company
})
.filter(Company => Company.foundedOn < 1990)
//.reduce((acc, Company) => acc + Company.marketValue, 0)

const old = marketValueOldCompany

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'TimCook', foundedOn: 1976 }
];

const marketValueOldCompany = companies.map(Company => {
     Company.marketValue = Company.marketValue - (Company.marketValue / 10)
    return Company
})
.filter(Company => Company.foundedOn < 1980)
//.reduce((acc, Company) => acc + Company.marketValue, 0)

const old = marketValueOldCompany
console.table(old) //peguei as informa


                                           Metodos Array

                                  //push, Adiciona iteis no Array

const myArray = [`abacate`,`limão`,`arroz`]

myArray.push(`abacte`)

                               //length, Diz Quantos iteis tem no array

const myArray = [`abacate`,`limão`,`arroz`]

console.log(myArray.length)

                           //sort, Ele deixa os iteis em ordem Alfabetica

const myArray = [`abacate`,`limão`,`arroz`]
myArray.sort()
console.log(myArray)

                  //delete, Ele exclui um intem do array, porem o lugar fica resevado

const myArray = [`abacate`,`limão`,`arroz`]

delete myArray [1]

console.log(myArray)

                         //every, Ele so vai retornar Tru se todos forem Tru

const users = [
    { name: 'Nico', credit: 600 },
    { name: 'Maria', credit: 900 },
    { name: 'Joana', credit: 300 },
    { name: 'Vanessa', credit: 200 },
];

const istru = users.every(user => user.credit >= 200 <=1000)

console.log(istru)
                        //some, Ele so vai retornar Tru se Apenas um for Tru
const users = [
    { name: 'Nico', credit: 600 },
    { name: 'Maria', credit: 900 },
    { name: 'Joana', credit: 300 },
    { name: 'Vanessa', credit: 200 },
];

const istru = users.some(user => user.credit >= 1000)

console.log(istru)

     //fill, Ele vai preencher com a informação que colocamos ele tem como colocamos inicio e fim para começar

const number = [1, 2, 3, 4]
number.fill(`Abacate`, 1, 3)
console.log(number)
                              //Find, ele buscar oque voce pediu
const users = [
    { name: 'Nico', credit: 600 },
    { name: 'Maria', credit: 900 },
    { name: 'Joana', credit: 300 },
    { name: 'Vanessa', credit: 200 },
];
const contatos = users.find(users => users.name === `Maria`);
console.log(contatos)

                          //Findindex, ele buscar em qual index ele estar

const users = [
    { name: 'Nico', credit: 600 },
    { name: 'Maria', credit: 900 },
    { name: 'Joana', credit: 300 },
    { name: 'Vanessa', credit: 200 },
];
const contatos = users.findIndex(users => users.name === `Maria`);

//E com essa informação podemos fazer oque quiser
users[contatos].name = `Maria joaquina`;
console.table(users)

                             //concat, juntamos dois array diferentes

const array1 = [1,2,3];
const array2 = [`blur`,`green`,`yallow`];
const array3 = array1.concat(array2)

console.log(array3)

                   //join, Ele habilita um modo de voce organizar os iteis do array

const cores = [`blur`, `green`, `yallow`];

const mix = cores.join(` * `)

console.log(mix)

                           // shift retira o primero item e o pop o ultimo

const temp = [`fire`, `air`, `Water`];

temp.shift()
temp.pop()

console.log(temp)

     //slice, Ele pegar o item do Array que voce escolheu, E ele nunca vai alterar o array, apenas amostrar o qual voce pediu

const user = [`fernanda`, `amanda`, `joana`, `faro`, `tulio`, `alemã`];

const newUser = user.slice(5,6)

console.log(newUser)

           //splice, Ele vai pegar e alterar o item pelo e de fato remover o intem do array

const user = [`fernanda`, `amanda`, `joana`, `faro`, `tulio`, `alemã`];

user.splice(0,5, `patricia`)

console.table(user)

                                                   //Json
                            //Um jeito de se comunicar com outras linguagens

//json em um Object
const users = {
    "nome": "Isaac",
    "cargo": "Desenvolvedor Full Stack",
    "linguagens": ["JavaScript", "Node.js"],
    "estudando": true
}

                //JSON.parse converter um json em object
             //JSON.stringify converter um javascript em json
const userJson = JSON.stringify(users)
const userJsonTojs = JSON.parse(userJson)

console.log(users)
console.log(userJson)
console.log(userJsonTojs)

                                            //Variaveis

        //O grande problema do var E que ele pode ser chamado de qualquer lugar

let myLet = "let"
const myConst = "const"

if (alert) {

var myVar = "var"

}

           //Conseguimos mudar o valor das conts se fordentro de objetos

const array = [1,2,3,4,5]

const user = {
    name: "isaac"
}

user.name = "joao"

array[0] = 2 
 
console.log(myVar)
console.log(myLet)
console.log(myConst)
console.log(array)
console.log(user)

          //Usando isso aprendemos como exportar e receber informações de outras pastas
                       //module.exports & const importar = require

const user = {
    name: "isaac",
    age: 20
}

//Deixar disponivel para poder ser pego o valor
module.exports = person
//Pegar os valores de outras pastas/modulos
const importar = require('./person')

                          //Escopo global e local & this

//todo o codigo pegar essa variavel
const user = "Global"
//apenas dentros da functio pode ser chamado
function local() {
    const user = "local"
}

             //this sempre é referente ao module.exportes no escopo global 

const user = {
    name: "isaac",
    age: 20,
    //Assim que adiciona funções em objetos
    talk: function () {
        //Agora o this fica de olho no user porque ele estar dentro dele/escopo
        console.log(this.age)
    }
}
//Chamando a função
user.talk()

function thiss() {
    //Agora como this não tem um dono ele voltou para o Global
    this.console.log("Agora sou Global")
}
//Chamando a função
thiss()
*/