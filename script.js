console.log('Hello!');

//regulare functioner/ functions

function greeting(){
    console.log("dette er en funksjon");
    const firstName = "Arild"
    const  greet = "good morning"
    console.log (greet + " " + firstName)
    console.log (`${greet}, ${firstName}`)

}
greeting();
//domm (dokument objekt model manipulation)

// lagringsplass = lagrings innhold

const greetingbutton = document.querySelector("#greetingbutton");
console.log(greetingbutton);

greetingbutton.addEventListener("click", greeting)   
greetingbutton.addEventListener("click", () =>{
console.log ("dette e en arrow function");

const firstName = "Arild"
    const  greet = "good morning"
    console.log (greet + " " + firstName);
}) 
const themechangebuttom = document.querySelector("#themechangebuttom");
console.log(themechangebuttom);

//funksjon
function themechange(){
    //hent
    const body = document.querySelector("body");
    console.log(body) 
    //modifisere
    body.classList.toggle("dark");

}
//send
themechangebuttom.addEventListener("click",themechange) 






