// Math.random(): print random number that between 0 to 1, 
// toString(16): print exchange to Hexadecimal
// slice(3,9): print 4th to 10th string

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

// get all img element
const img = document.querySelector("img");
// whenever img is clicked, do something
img.addEventListener("click",function(){
    // get first body element , and call it body
    var body = document.getElementsByTagName("body")[0];
    // body.style.backgroundColor = "red";

    // let body style that is backgroundColor become randonColor();
    body.style.backgroundColor = randonColor();
})