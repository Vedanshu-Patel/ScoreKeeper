var p1b=document.querySelector("#p1");
var p2b=document.getElementById("p2");
var p1S =0;
p2S=0;
var pd1 =document.querySelector("#pd1");
var pd2=document.getElementById("pd2");
var gameover=false;
var sc=5;
var res = document.querySelector("#r");
var input=document.querySelector("input");

var scd=document.querySelector("p span");
p1b.addEventListener("click",function(){
    if(!gameover){
        p1S++;
        if(p1S==sc){
            gameover=true;
            pd1.classList.add("winner");
            alert("game over p1 won");
        }
    
    pd1.textContent=p1S;
    }
    
});
p2b.addEventListener("click",function(){
    if(!gameover){
        p2S++;
        if(p2S==sc){
            gameover=true;
            pd2.classList.add("winner");
            alert("game over p2 won");
        }
    
    pd2.textContent=p2S;
    }
    
});
r.addEventListener("click",function(){
    pd1.textContent=0;
    pd2.textContent=0;
    p1S=0;
    p2S=0;
    pd1.classList.remove("winner");
    pd2.classList.remove("winner");
    gameover=false;
});
function reset() {
    pd1.textContent=0;
    pd2.textContent=0;
    p1S=0;
    p2S=0;
    pd1.classList.remove("winner");
    pd2.classList.remove("winner");
    gameover=false;
}
input.addEventListener("change",function(){
    scd.textContent=input.value;
    sc=input.value;
    reset();
});
