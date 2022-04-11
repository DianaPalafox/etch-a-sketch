const container = document.querySelector('.container');

for (i=0; i<256; i++) {
    const content = document.createElement('div');
    content.classList.add('content');
    content.style.border = "thin solid gray";
    container.appendChild(content); 
}

let cont = document.querySelectorAll('.content'); 

cont.forEach((content)=> {
    content.addEventListener("mouseover", function() {
        content.style.backgroundColor = 'black';
       
    });
})


