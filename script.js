var score=0;
function makebubble()
{
    var result="";
    for(var i=0;i<150;i++)
    {
        var random=Math.floor(Math.random()*10);
        result+=`<div class="bubble">${random}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=result;
    console.log("hello");
}
makebubble();
var timer=60;
function runtimer()
{
    var x=setInterval(function () {
        if(timer>0)
        {
        timer--;
        document.querySelector("#timervalue").textContent=timer;
        }
        else
        {
            clearInterval(x);
            document.querySelector("#pbtm").innerHTML=`<h3>Game Over Your Score is ${score}</h3>`;
        }
    },1000)
}
runtimer();
var x;
function makehit()
{
    x=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=x;
}
makehit();
function increasehit()
{
    score+=10;
    document.querySelector("#score").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click",function(details){
    var z=Number(details.target.textContent);
    console.log(z);
    if(z==x)
    {
        increasehit();
        makebubble();
        makehit();
    }
    else{
        makebubble();
        makehit();
    }
})
