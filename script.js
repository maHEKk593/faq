const heading = document.querySelectorAll(".heading");
const reply = document.querySelectorAll(".reply");
const question = document.querySelectorAll(".question");
const arrowDown = document.querySelectorAll(".arrow-down");
for (let i = 0; i < heading.length; i++) {
    const headings = heading[i];
headings.addEventListener("click", getInput);
function getInput() {
    headings.classList.toggle("active")
    arrowDown[i].classList.toggle("active");
    if(headings.classList.contains("active")){
        reply[i].style.display = "block";   
        question[i].style.fontWeight = "bold";   
    } 
    else {
        reply[i].style.display = "none"; 
        question[i].style.fontWeight = "100";   
    }
 }
}