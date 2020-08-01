var userScore = 0,compscore = 0;
var userScore_span = document.getElementById('user-score');
var compScore_span = document.getElementById('comp-score');
const scoreboard_div = document.querySelector('.score-board');
var result_div = document.querySelector('.result1')
var rock_div = document.getElementById('r');
var paper_div = document.getElementById('p');
var scissor_div = document.getElementById('s');
function convert(something){
    if (something=='r') return 'Rock';
    else if(something=='s') return 'Scissors';
    else return 'Paper';
}
function getcomputerchoice(){
    const choices = ['r','p','s'];
    const randomNumber  =(Math.floor(Math.random()*3));
    return choices[randomNumber]
}
function win(user,comp){
userScore++;
userScore_span.innerHTML = userScore
compScore_span.innerHTML = compscore


result_div.innerHTML = convert(user).fontcolor('green') + " beats " + convert(comp).fontcolor('red') + " YOU WIN!!!"

document.getElementById(user).classList.add('green-glow')
setTimeout(function(){document.getElementById(user).classList.remove('green-glow')},1900)
}

function lose(user,comp){

    compscore++;
    userScore_span.innerHTML = userScore
compScore_span.innerHTML = compscore
result_div.innerHTML = convert(comp).fontcolor('red') + " beats " + convert(user).fontcolor('green') + " YOU LOSE!!!"
document.getElementById(user).classList.add('red-glow')
setTimeout(function(){document.getElementById(user).classList.remove('red-glow')},1900)
}
function draw(){
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compscore
    result_div.innerHTML = 'DRAW!!!'
    
}
function game(userChoice){
const computerchoice = getcomputerchoice();
switch (userChoice+computerchoice){
    case "pr":
    case "rs":
    case "sp":
        win(userChoice,computerchoice);
        console.log('USER WINS!')
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice,computerchoice);
        console.log('USER LOSES!')
        break;
    case "rr":
    case "pp":
    case "ss":
        draw();
        console.log('DRAW! ')
        break;
    
    1}

}
function main(){rock_div.addEventListener('click',function(){
game('r')
});

paper_div.addEventListener('click',function(){
    game('p')});

scissor_div.addEventListener('click',function(){
    game('s')});
}

main();
