alert("Aula 2 - Array e Dicionário");
// Array
var lista = ["maçã", "pera", "laranja"];
// alert(lista[1]);
lista.push("uva"); // adiciona elemento no array
// lista.pop(); // tirar ultimo elemento da lista
console.log(lista.length); // mostra tamanho da lista
console.log(lista);
// console.log(lista.reverse()); // reverte os valores do array
console.log(lista.toString());

console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" - ")); // também transforma em String como (to.String), mas é possível alterar os espeços entre elementos

// Dicionário
/*var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta);
console.log(fruta.nome);
*/

// Array + Dicionário
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
console.log(frutas[1].nome);