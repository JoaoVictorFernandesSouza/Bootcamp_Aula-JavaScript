function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(5, 10));

var validar; // variavel global
function validadeIdade(idade){
    // var validar - variavel local
    validar;
    if (idade >= 18) {
        validar = true
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validadeIdade(idade));