const addBtn = document.getElementById("addBtn");
const colors = document.getElementById("colors");
const Form = document.getElementById("form");
const FormContainer = document.getElementById("form-box");
const FormClose = document.getElementById("form-close");
const colorBtns =document.querySelectorAll(".add-btn");
const changeBtn = document.getElementById("change-button");
const darkMode = document.getElementById("darkMode");
const sideBar = document.getElementById("sideBar");

// ============== ADD BUTTON ==================


addBtn.addEventListener("click", function(){
    colors.classList.toggle("add-btn-show");
    if(changeBtn.classList[0]=="ri-add-circle-fill"){
        changeBtn.classList.remove("ri-add-circle-fill");
        changeBtn.classList.add("ri-close-circle-fill");
    }
    else{
        changeBtn.classList.remove("ri-close-circle-fill");
        changeBtn.classList.add("ri-add-circle-fill");
    }
})


// ================ COLOR BTNS =================


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
    FormContainer.style.backgroundColor =colorId;
}

FormClose.addEventListener("click", closeForm);
function closeForm(){
    Form.classList.add("form-display-none");
}


// ================== DARK MODE ====================

darkMode.addEventListener("click", toggleDark);
function toggleDark(e){
    e.preventDefault();
    let icon  = darkMode.firstChild.classList;
    if(icon == "ri-sun-line"){
        icon.remove("ri-sun-line");
        icon.add("ri-moon-line");
        icon.add("font-dark");
    }
    else{
        icon.remove("ri-moon-line");
        icon.remove("font-dark");
        icon.add("ri-sun-line");
    }
    
    // Activities
    document.body.classList.toggle("body-dark");
    sideBar.classList.toggle("sidebar-dark");
    addBtn.classList.toggle("font-dark");
    

}