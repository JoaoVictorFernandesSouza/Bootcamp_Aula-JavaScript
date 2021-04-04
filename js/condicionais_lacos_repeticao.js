alert("Aula 3 - Condicionais, laços de repetição e Date");


alert("Condicionais IF e ELSE");
var idade = prompt("Qual sua idade"); // Prompt - exibe uma pergunta ao usuário e o que for respondido será gravado na variável
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};

console.log("Laços de repetição WHILE e FOR");

console.log("WHILE");
var count = 0;
while (count <= 5) {
    console.log(count);
    count++; // count = count + 1;
};

console.log("FOR");
for(count = 0; count <= 5; count++){
   console.log(count);
};


console.log("Date");
var d = new Date();
console.log(d);
console.log(d.getMonth() + 1);
console.log(d.getMinutes());

