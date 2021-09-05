console.log("#"+Math.random().toString(16).slice(3, 9))
console.log("#"+Math.random().toString(16))
console.log("#"+Math.random())
console.log(Math.floor(Math.random()*2))
console.log(Math.floor(Math.random()*3))
console.log(Math.floor(Math.random()*4))
console.log(Math.floor(Math.random()*5))


function randonColor(){
    return "#"+Math.random().toString(16).slice(3, 9);
}
console.log(randonColor())


const img = document.querySelector("img");
img.addEventListener("click",function(){
    var body = document.getElementsByTagName("body")[0];
    // body.style.backgroundColor = "red";
    body.style.backgroundColor = randonColor();
})