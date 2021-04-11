"use strict"


const texts= ["WEBSITES", "ILLUSTRATIONS", "PROTOTYPES"];
let counts= 0;
let index = 0;
let currentText = '';
let letter ='';

(function type(){
    if(counts === texts.length){
        counts = 0;
    }
    currentText =texts[counts];
    letter = currentText.slice(0, ++index);
document.querySelector(".typing").textContent = letter;
document.querySelector(".typing").style.color = "yellow"; 
if(letter.length === currentText.length){
    counts++;
    index = 0;

}    
setTimeout(type, 300);
})();

const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })