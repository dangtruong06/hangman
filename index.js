const hint = document.getElementById("hint");
const man = document.getElementById("images");
const message = document.getElementById("message");
const win = document.getElementById("win-lose");

const buttons = document.getElementsByClassName("buttons"); //get buttons class to change color

let lives = 0;
let usedWords = [];
let hintLength = [];
let answer = ""
let compareAns = "";

function randomWord(){
    lives = 0;
    hintLength = [];
    usedWords = [];
    display.value = "";

    answer = words[Math.floor(Math.random() * words.length)].toUpperCase();
    
    for(let i = 0; i < answer.length; i++){
        hintLength.push("_"); // creates array for hint spaces (_ _ _ _ _)
    }
    hint.textContent = hintLength.join(" "); // joins '_' together and put as text content on screen
    win.textContent = "";
    man.src=`images/${lives}.png`;

    console.log(answer); // display the answer in console

    for(let i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = "hsl(220, 72%, 56%)";
        buttons[i].style.color = "black"
    }
    
}
 
function appendDisplay(word){
    const color = document.getElementById(word);
    display.value = word;
    
    if(!answer.includes(word) && !usedWords.includes(word)){
        lives += 1;
    }
    else{
        
    }
    if(!usedWords.includes(word)){
        usedWords.push(word);
        color.style.backgroundColor = "hsla(220, 100%, 60%, 0.46)";
        color.style.color = "hsla(222, 5%, 48%, 0.459)";
    }
    
    for(let i = 0; i < answer.length; i++){
        if(answer[i] == word){
            hintLength[i] = word;
        }
    }

    compareAns = hintLength.join('');

    if(compareAns == answer && lives < 5){
        win.textContent = "You WIN!";
    }
    else if(lives > 5){
        win.textContent = `You lost! Answer is ${answer}`;
    }
    
    man.src=`images/${lives}.png`;
    hint.textContent = hintLength.join(" ");

    
}
    



