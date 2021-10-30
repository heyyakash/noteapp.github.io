const addBtn = document.getElementById("addBtn");
const colors = document.getElementById("colors");
const Form = document.getElementById("form");
const FormClose = document.getElementById("form-close");
const colorBtns =document.querySelectorAll(".add-btn");
addBtn.addEventListener("click", function(){
    colors.classList.toggle("add-btn-show");
})
// ================== ADD ==================
// === colorbtns ==
let first = document.getElementById("moccasin");
let second = document.getElementById("coral");
let third = document.getElementById("plum");
let fourth = document.getElementById("cyan");
let fifth = document.getElementById("palegreen");
let allColor  = new Array(first, second,third,fourth,fifth);
allColor.forEach(element => element.addEventListener("click", function(){
    showFormBox(element.id);
}));

function showFormBox(colorId){
    let formColor = document.getElementById("form-color");
    Form.classList.remove("form-display-none");
    formColor.style.backgroundColor = colorId;
}



FormClose.addEventListener("click", closeForm);
function closeForm(){
    Form.classList.add("form-display-none");
}