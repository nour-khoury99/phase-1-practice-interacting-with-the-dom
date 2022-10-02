
//
let minus=document.querySelector("#minus"), 
plus=document.querySelector("#plus"),
heart=document.querySelector("#heart"),
pause=document.querySelector("#pause"),
commentForm=document.getElementsByTagName("form")[0]
 a=document.getElementById("counter");


//RESUME AND PAUSE BUTTON

pause.addEventListener('click',function() {
   
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled =true;
    
   
});







//plus Event 

plus.addEventListener("click",function(){
 
    let b=parseInt(a.innerText);a.innerText=b+1 
})

//MINUS event 
minus.addEventListener("click",function(){

    let b=parseInt(a.innerText);a.innerText=b-1
})

//HEART EVENT
heart.addEventListener("click",function(){
    let 
        b=parseInt(a.innerText),
        c=document.querySelector(".likes"),
        d=void 0;

        if([].concat(_toConsumableArray(c.children)).map(function(a){return parseInt(a.dataset.num)}).includes(b))
              {
                d=document.querySelector('[data-num="'+b+'"]');
                var e=parseInt(d.children[0].innerText);
                d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"
               }else (d=document.createElement("li")).setAttribute("data-num",b),
                   d.innerHTML=b+" has been liked <span>1</span> time",
                   c.appendChild(d)})


//POST COMMENTS
document.addEventListener('DOMContentLoaded',() => {
    commentForm.addEventListener('submit',(e) => {
        e.preventDefault()
        handleComment(e.target.comment_input.value)
    })
})

function handleComment(comm){
    let p = document.createElement('p')
    p.textContent = comm
    document.querySelector('#comments').appendChild(p);
}