showNotes();
const formBtn = document.getElementById("form-btn");
const form = document.getElementById("survey");
const FormBox = document.getElementById("form");
formBtn.addEventListener("click", addNote);

function addNote(e){
    e.preventDefault();
    let noteTitle = document.getElementById("title").value;
    let noteText = document.getElementById("note").value;
    let noteColor = document.getElementById("form-color").style.backgroundColor;
    let date = new Date;
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let monthNow = months[date.getMonth()];
    let day = date.getDate();
    let year =date.getFullYear();
    let newObj = {
        title:noteTitle,
        body:noteText,
        date:`${monthNow} ${day}, ${year}`,
        color:noteColor
    }
    console.log(noteColor);
    getNotes(newObj);
    form.reset();
    FormBox.classList.add("form-display-none");
}

function getNotes(newObj){
    let notes = localStorage.getItem("notes");
    if (notes==null){
        arr = [];
    }
    else{
        arr = JSON.parse(notes);
    }
    arr.unshift(newObj);
    localStorage.setItem("notes", JSON.stringify(arr));
    showNotes();   
}

function showNotes(){
    const notesBody = document.getElementById("body");
    let notes = localStorage.getItem("notes");
    if (notes==null){
        arr = [];
    }
    else{
        arr = JSON.parse(notes);
    }
    let html = "";
    Array.from(arr).forEach(function(element, index){
        html+=`<div class="note__box" style = "background-color:${element.color}">
                  <button class="note__delete" onclick ="deleteNote(${index})"><i class="ri-close-line"></i></button>
                  <h2 class="note__title">${element.title}</h2>
                  <p class="note__body">${element.body}</p>
                  <p class="note__date">${element.date}</p>
               </div>`;
    })
    notesBody.innerHTML = html;
    
}
function deleteNote(indexNo){
    let notes = localStorage.getItem("notes");
    if (notes==null){
        arr = [];
    }
    else{
        arr = JSON.parse(notes);
    }
    arr.splice(indexNo,1);
    localStorage.setItem("notes", JSON.stringify(arr));
    showNotes();   
}
