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
