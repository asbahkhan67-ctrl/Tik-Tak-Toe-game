let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");

const genChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    const rdmIndx = Math.floor(Math.random()*3);
    return options[rdmIndx];
};

const drawGame = () => {
    msg.innerText = "Game drawn, Play Again";
    msg.style.backgroundColor = "#808080";
}

const showWinner = (userwin , userChoice , compChoice) => {
    if(userwin) {
        msg.innerText = 
        `You win! You choice : ${userChoice} , Comp Choice : ${compChoice}`;
        msg.style.backgroundColor = "#140D4F";
        userScore++;
        user.innerText = userScore;
    }

    else {
        msg.innerText = 
        `You lose! You choice : ${userChoice} , Comp Choice : ${compChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        comp.innerText = compScore;
    }

}

const playGame = (userChoice) => {

    const compChoice = genChoice();

    let userwin = true;

    if(compChoice === userChoice) {
        drawGame();
        return;
    }

    else if(userChoice === "rock") {
        userwin = compChoice === "scissor" ? true : false;
    }

    else if(userChoice === "scissor") {
        userwin = compChoice === "paper" ? true : false;
    }

    else  {
        userwin = compChoice === "rock" ? true : false;
    }

    showWinner(userwin , userChoice , compChoice);



};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});