
function play(){
    
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1+".png";//dice png 1 to 6
var randomImageSource=randomDiceImage;//images.dice1.pnd to dice6.png
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";//dice png 1 to 6
var randomImageSource2=randomDiceImage2;
var image2=document.querySelectorAll("img")[2];
image2.setAttribute("src",randomImageSource2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="&#128681; Player1 Win";
}
 else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML=" <span>🤝</span> Match Tie";
}
else{
    document.querySelector("h1").innerHTML="  &#x1F6A9; Player2 Win";
}
}
