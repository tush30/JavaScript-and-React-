function l(like){
    let count =0;
    document.getElementById(like).addEventListener("click",function(){
        like(count);
    });
    document.getElementById(unlike).addEventListener("click",function(){
        unlike(count);
    });
}
function like(count){
    console.log(++count);
}
function unlike(count){
    console.log(--count);
}