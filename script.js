const container = document.querySelector('.container');

function makeGrid(x) {
    let grid= x*x;
    for (i=0; i<grid; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.style.border = "thin solid gray";
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

colorBlack(); 


function clearGrid() {
   let reset= document.querySelectorAll('.content'); 
   reset.forEach((content) => content.style.backgroundColor = 'white');
   makeNewGrid();
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
        colorBlack(); 
    }
}
