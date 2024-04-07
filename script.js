var boxes =document.querySelectorAll(".div .dd1")
for (let i = 0; i <boxes.length; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    boxes[i].style.backgroundColor=randomHex
    
} 
const home=document.querySelector(".content-section")
const torn =document.querySelector(".tournament-page")
const links=document.querySelectorAll(".nav-section ul li")
links[0].addEventListener("click",()=>{
    torn.style.display="none"
    home.style.display="flex"
})
links[1].addEventListener("click",()=>{
    home.style.display="none"
    torn.style.display="flex"
})
