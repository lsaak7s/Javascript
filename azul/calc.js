//Aqui estamos recebendo todos os valores selecionados
const { mult, menos, sum, sub, users } = require("./sum")

const client1 = 10
const client2 = 30
//Template Strings
console.log(` + : ${sum(client1, client2)}, - : ${menos(client1, client2)}, * : ${mult(client1, client2)},  % : ${sub(client1, client2)},identificação ${users.name}`)