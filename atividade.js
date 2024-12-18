// Declaração de variáveis
let nome = "João";  // Variável para armazenar o nome do usuário
const idade = 25;   // Constante para armazenar a idade (não muda durante a execução)
var saudacao = "Olá, ";

// Função para exibir uma saudação
function exibirSaudacao() {
    // Concatenando variáveis
    saudacao += nome + ". Você tem " + idade + " anos.";
    console.log(saudacao);
}

// Função para verificar a idade e recomendar uma atividade
function recomendacao() {
    if (idade < 18) {
        console.log("Você é menor de idade, recomendamos atividades educativas.");
    } else if (idade >= 18 && idade <= 30) {
        console.log("Você está na faixa de idade jovem! Recomendamos atividades ao ar livre.");
    } else {
        console.log("Você é adulto. Que tal praticar um esporte ou ler um livro?");
    }
}

// Chamar as funções
exibirSaudacao();
recomendacao();
