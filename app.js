let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function() {
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});

function gameflash(btn){
    btn.classList.add("flash"); //added from css(white color)
    setTimeout(function (){
        btn.classList.remove("flash");
    },300);
}
 
function userFlash(btn){
    btn.classList.add("userFlash"); //added from css(white color)
    setTimeout(function (){
        btn.classList.remove("userFlash");
    },300);
}
 
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //choose random button
    let randomIndex=Math.floor(Math.random()*4);//0 to 3 index
    let randomColor=btns[randomIndex];
    let randomBtn=document.querySelector(`.${randomColor}`);
    
    // console.log(randomIndex);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);

    gameflash(randomBtn);
}

function checkAns(index){
    // console.log("curr level: ",level);
    

    if(userSeq[index]==gameSeq[index]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was<b> ${level}</b> <br>Press any key from keyboard to start.`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white";
       },150);
       reset();
    }

}

function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
