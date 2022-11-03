const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu");
const form = document.querySelector("#forms");
const btn = document.querySelector(".btns");
const campos = document.querySelector(".campos");

const ativa = hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    menu.classList.toggle('active');
    form.classList.toggle('active');
    btn.classList.toggle('active');
})






