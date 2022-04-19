const container = document.querySelector('.container');

function makeGrid(x) {
    let grid= x*x;
    for (i=0; i<grid; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.style.border = "thin solid purple";
        content.style.width = 600/x; 
        content.style.height = 600/x; 
        container.appendChild(content); 
    }
}
makeGrid(16);

function colorBlack() {
    let newContent = document.querySelectorAll('.content'); 
    newContent.forEach((content)=> {
    content.addEventListener("mouseover", function() {
        content.style.backgroundColor = 'black';
    });
})
}

function random(n){
    return Math.floor(Math.random()*n); 
}


function generateRGBColor(){
    return 'rgb(' + random(255)+ ','+random(255)+ ','+random(255)+')'; 
}

function randomColor() {
    let newContent = document.querySelectorAll('.content'); 
    newContent.forEach((content)=> {
    content.addEventListener("mouseover", function() {
        content.style.backgroundColor = generateRGBColor();
        });
    })
}

function clearGrid() {
   let reset= document.querySelectorAll('.content'); 
   reset.forEach((content) => content.style.backgroundColor = 'white');
}

function removeGrid() {
    let newContent = document.querySelectorAll('.content'); 
    newContent.forEach((content)=> {
    content.remove();
    });
}

function makeNewGrid(){
    removeGrid(); 
   let x=  Number(prompt("Please, select the size for your new grid. 100x100 is the max."));
    if (x > 100) {
        alert("Please select a new number that not surpases 100.")
    }
    else {
        container.style.gridTemplateColumns = `repeat(${x},auto)`;
        makeGrid(x);
       
    }
}
