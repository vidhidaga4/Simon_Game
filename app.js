let gameSeq=[]
let userSeq=[]

let btns=["yellow","red","green","blue"]

let started=0;
let level=0;
let high=0;
let Curr=0;

let h2=document.querySelector(".message");
let CurrScore=document.querySelector(".current-score");
let highScore=document.querySelector(".highest-score");

document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game started");
    started=true;
    
    CurrScore.innerText=`Your Score: ${level}`;
    highScore.innerText=`Highest Score: ${high}`;
    h2.style.color="white";
    levelUp();
   }
})

function btnFlash(btn){ 
    console.dir(btn);
    if(btn.classList[1]=="green"){
        sound1.play();
        btn.classList.add("green-blink");
        setTimeout(function(){
          btn.classList.remove("green-blink");
        },200)
    }
    if(btn.classList[1]=="yellow"){
        sound3.play();
        btn.classList.add("yellow-blink");
        setTimeout(function(){
          btn.classList.remove("yellow-blink");
        },200)
    }
    if(btn.classList[1]=="blue"){
        sound4.play();
        btn.classList.add("blue-blink");
        setTimeout(function(){
          btn.classList.remove("blue-blink");
        },200)
    }
    if(btn.classList[1]=="red"){
        sound2.play()
        btn.classList.add("red-blink");
        setTimeout(function(){
          btn.classList.remove("red-blink");
        },200)
    }
    
}

function levelUp(){
    userSeq=[]
    level++;
    h2.innerText="";
    h2.innerText=`Level: ${level}`;
    
    

    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randBtn=document.querySelector(`.${randomColor}`)

    //store random color in gameSeq
    gameSeq.push(randomColor);
    console.log(gameSeq)

    btnFlash(randBtn);
}


function checkAns(idx){

  if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        Curr=level;
        CurrScore.innerText=`Your Score: ${level}`;
        setTimeout(levelUp,1000);
    }
  }
  else{
     h2.innerHTML=`<b style="color:red;">Game Over!</b> Your Score was : ${Curr} <br>Press any Key to start`;
    //  let color=userSeq[userSeq.length-1];
    //  let btn=document.querySelector()
    sound5.play();
    highScore.innerText="";
    CurrScore.innerText="";
     reset();
  }
}


function btnPress(){
 let btn=this;
 btnFlash(btn);

 userColor=btn.getAttribute("id");
 userSeq.push(userColor);


 checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress)
}

//reset function

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    
    
    if(Curr>high){
        high=Curr;
        // highScore.innerText=`Highest Score: ${high}`;
    }
    level=0;
    
    
}

//effect for sound
var sound1=new Audio();
sound1.src="/sounds/green.mp3";

var sound2=new Audio();
sound2.src="/sounds/red.mp3"

var sound3=new Audio();
sound3.src="/sounds/yellow.mp3"

var sound4=new Audio();
sound4.src="/sounds/blue.mp3";

var sound5=new Audio();
sound4.src="/sounds/end.mp3";