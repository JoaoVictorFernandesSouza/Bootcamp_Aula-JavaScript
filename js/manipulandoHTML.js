function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://www.lipsum.com");
    // window.location.href = "https://www.lipsum.com";
}

function trocar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value); // pega o valor que está sendo selecionado
}