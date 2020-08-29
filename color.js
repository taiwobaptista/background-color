let colors = ["blue", "red","aqua","orange", "yellow","green","pink","brown","grey","gold","teal"];
let button = document.getElementById ("mybtn");
let mainDiv = document.getElementById ("main"); 
let colorshow = document.getElementById ("color")

button.addEventListener("click", mybutton);

function mybutton (){
    let random = colors[Math.floor(Math.random() *colors.length)] 
    mainDiv.style.background = random;
    console.log(random);
    colorshow.innerHTML = (random);
    
    

    
}