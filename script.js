// Dom elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You cannot leave this empty");
    }else{
        let li = document.createElement("li"); // storing the element in li variable
        li.innerHTML = inputBox.value; // whatever text we added on inputField it will added on this li
        listContainer.appendChild(li); // Added li will be display

        // adding cross icon
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; 
    saveData();
}

// deleting the todos list
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// saving data into local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// saving data permanently 
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();