
function attachEventListener(){
    //attach   event listener to button
    let count = 0;
    document.getElementById("button").addEventListener("click",function xyz(){
        console.log("button clicked",++count);
    });
}
attachEventListener();