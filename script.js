// Lista de curiosidades sobre a Hello Kitty
const curiosidades = [
    "O peso da Hello Kitty equivale ao de três maçãs e sua altura ao de cinco maçãs!",
    "A comida favorita da Hello Kitty é a torta de maçã feita pela sua mãe, Mary White.",
    "Ela tem um gato de estimação chamado Charmmy Kitty e um hamster chamado Sugar.",
    "O primeiro produto oficial da Hello Kitty foi uma bolsinha de moedas de vinil lançada em 1975.",
    "Segundo a Sanrio, a Hello Kitty não é uma gata, mas sim uma garotinha britânica muito fofa!",
    "O tipo sanguíneo da Hello Kitty é A, e ela adora tocar piano e colecionar coisas fofas."
];

// Elementos do DOM
const btnCarinho = document.getElementById("btn-carinho");
const contadorSpan = document.getElementById("contador");
const btnCuriosidade = document.getElementById("btn-curiosidade");
const textoCuriosidade = document.getElementById("texto-curiosidade");

let totalAbracos = 0;
let indiceAnterior = -1;

// Função para contar abraços
btnCarinho.addEventListener("click", () => {
    totalAbracos++;
    contadorSpan.textContent = totalAbracos;
    
    // Efeito visual simples no botão
    btnCarinho.textContent = "Abraço Enviado! 💖";
    setTimeout(() => {
        btnCarinho.textContent = "Mandar um Abraço 💕";
    }, 800);
});

// Função para exibir uma curiosidade diferente da anterior
btnCuriosidade.addEventListener("click", () => {
    let novoIndice;
    
    do {
        novoIndice = Math.floor(Math.random() * curiosidades.length);
    } while (novoIndice === indiceAnterior);
    
    indiceAnterior = novoIndice;
    textoCuriosidade.textContent = curiosidades[novoIndice];
});
