// Candidatos fictícios para demonstração
const candidatos = {
    "10": {
        nome: "João Silva",
        partido: "Partido Azul"
    },

    "20": {
        nome: "Maria Souza",
        partido: "Partido Verde"
    },

    "30": {
        nome: "Pedro Santos",
        partido: "Partido Amarelo"
    }
};

// Contagem dos votos
let votos = {
    "10": 0,
    "20": 0,
    "30": 0,
    "branco": 0
};

// Número digitado
let numero = "";

function atualizarTela() {
    document.getElementById("numero1").value =
        numero[0] || "";

    document.getElementById("numero2").value =
        numero[1] || "";
}

// Digitar número
function digitar(n) {
    if (numero.length < 5) {
        numero += n;
        atualizarTela();

        if (numero.length === 5) {
            mostrarCandidato();
        }
    }
}

// Mostrar candidato
function mostrarCandidato() {
    const candidato = candidatos[numero];

    if (candidato) {
        document.getElementById("nome").innerText =
            "Nome: " + candidato.nome;

        document.getElementById("partido").innerText =
            "Partido: " + candidato.partido;

        document.getElementById("mensagem").innerText =
            "Confira seu voto!";
    } else {
        document.getElementById("nome").innerText =
            "VOTO INVÁLIDO";

        document.getElementById("partido").innerText = "";

        document.getElementById("mensagem").innerText =
            "Número não encontrado";
    }
}

// Corrigir voto
function corrigir() {
    numero = "";
    atualizarTela();

    document.getElementById("nome").innerText = "Nome:";
    document.getElementById("partido").innerText = "Partido:";
    document.getElementById("mensagem").innerText = "";
}

// Voto em branco
function branco() {
    numero = "BRANCO";

    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";

    document.getElementById("nome").innerText =
        "VOTO EM BRANCO";

    document.getElementById("partido").innerText = "";

    document.getElementById("mensagem").innerText =
        "Confirme seu voto!";
}

// Confirmar voto
function confirmar() {

    if (numero === "BRANCO") {
        votos.branco++;
    } else if (candidatos[numero]) {
        votos[numero]++;
    } else {
        alert("Digite um número válido!");
        return;
    }

    alert("VOTO CONFIRMADO!");

    corrigir();

    console.log("Resultado dos votos:", votos);
}

function trocarTela(pagina) {
    window.location.href = pagina;
}

function confirmar() {

    if (numero === "BRANCO") {
        votos.branco++;
    } else if (candidatos[numero]) {
        votos[numero]++;
    } else {
        alert("Digite um número válido!");
        return;
    }

    alert("VOTO CONFIRMADO!");

    trocarTela("DEPUTADO ESTADUAL.HTML");
}