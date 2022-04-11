let grid= 16*16;
const container = document.querySelector('.container');

function makeGrid() {
    for (i=0; i<grid; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.style.border = "thin solid gray";
        container.appendChild(content); 
    }
}
makeGrid();

let newContent = document.querySelectorAll('.content'); 

newContent.forEach((content)=> {
    content.addEventListener("mouseover", function() {
        content.style.backgroundColor = 'black';
       
    });
})

const button = document.querySelector('button'); 
button.addEventListener('click', () => {
    clearGrid();
})

function clearGrid() {
   let reset= document.querySelectorAll('.content'); 
   reset.forEach((content) => content.style.backgroundColor = 'white');
}