"use strict";
const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
let userWins = 0;
let computerWins = 0;
function play(userChoice) {
    const computerChoice = opciones[Math.floor(Math.random() * opciones.length)];
    // Mostrar elección del usuario
    const userBox = document.getElementById("user-choice");
    if (userBox)
        userBox.innerHTML = `👤 Tú elegiste: ${icono(userChoice)}`;
    // Mostrar elección de la máquina con animación
    const computerBox = document.getElementById("computer-choice");
    if (computerBox) {
        computerBox.innerHTML = `🤖 Máquina eligió: ${icono(computerChoice)}`;
        computerBox.classList.add("animate");
        setTimeout(() => computerBox.classList.remove("animate"), 600);
    }
    // Determinar ganador
    let result = "";
    if (userChoice === computerChoice) {
        result = "Empate 😐";
    }
    else if ((userChoice === "piedra" &&
        (computerChoice === "tijera" || computerChoice === "lagarto")) ||
        (userChoice === "papel" &&
            (computerChoice === "piedra" || computerChoice === "spock")) ||
        (userChoice === "tijera" &&
            (computerChoice === "papel" || computerChoice === "lagarto")) ||
        (userChoice === "lagarto" &&
            (computerChoice === "spock" || computerChoice === "papel")) ||
        (userChoice === "spock" &&
            (computerChoice === "tijera" || computerChoice === "piedra"))) {
        result = "¡Ganaste! 🎉";
        userWins++;
    }
    else {
        result = "Perdiste 😢";
        computerWins++;
    }
    // Mostrar resultado
    const winner = document.getElementById("winner");
    if (winner)
        winner.textContent = "Resultado: " + result;
    // Actualizar marcadores
    const userScore = document.getElementById("user-score");
    if (userScore)
        userScore.textContent = "Victorias: " + userWins;
    const computerScore = document.getElementById("computer-score");
    if (computerScore)
        computerScore.textContent = "Victorias: " + computerWins;
}
// Función para asignar iconos
function icono(opcion) {
    switch (opcion) {
        case "piedra":
            return "✊";
        case "papel":
            return "✋";
        case "tijera":
            return "✌️";
        case "lagarto":
            return "🦎";
        case "spock":
            return "🖖";
        default:
            return "";
    }
}
// Para evitar error de que play no existe en onclick en HTML
window.play = play;
