console.log("game 2");

const display=document.querySelector("#grid");
const box=document.querySelectorAll(".box");
const score=document.getElementById("score");
const timeLeft=document.getElementById("timeleft");

let timerId=null;
let result=0;
let time=30;
let current;

function create() {
    box.forEach(item =>{
        item.classList.remove("move");
    })

    const randomBox=box[Math.floor(Math.random()*9)];
    randomBox.classList.add("move");
    current=randomBox.id;
}

box.forEach(item =>{
    item.addEventListener("mousedown" ,function () {
        if(item.id===current){
            result++;
            score.textContent=result;
            current=null;
        }
    })
})


function boxMove() {
    timerId=setInterval(create , 1000);
}

boxMove()

function countDown() {
    time--
    timeLeft.textContent=time;
    if (time==0) {
        alert("game over your score is "+result);
        clearInterval(countDownTimerId)
        clearInterval(timerId);
    }
}


let countDownTimerId=setInterval(countDown,1000)