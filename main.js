// Get elements from DOM

const task1 = document.getElementsByClassName('task1');
const task2 = document.getElementsByClassName('task2');
const task3 = document.getElementsByClassName('task3');
const inputField = document.getElementsByClassName('input-element');
const sendbutton = document.getElementsByClassName('sendbutton');
const taskArea = document.getElementsByClassName('taskarea');

const cross = document.getElementsByClassName('cross'); 
const checkmark = document.getElementsByClassName('checkmark'); 
const hiddenClone = document.getElementById('hiddenClone');

// cross EventListeners

cross[0].addEventListener('click', removeCrossFunction);
cross[1].addEventListener('click', removeCrossFunction);
cross[2].addEventListener('click', removeCrossFunction);

// check EventListeners

function addCheckFunction(e) {
    checkmark[0].parentElement.parentElement.innerHTML = "Done";
}

checkmark[0].addEventListener('click', addCheckFunction);
checkmark[1].addEventListener('click', addCheckFunction);
checkmark[2].addEventListener('click', addCheckFunction);

// submit Event Listeners

function submitInputField(e) {
    if (inputField[0].value !== "") {
        let clone = hiddenClone.cloneNode(true);
        // clone.innerHTML = inputField[0].value;
        clone.innerHTML = `<div class="task1" draggable="true">
        <div class="icons-task1"> 
            <img src="./images/checkmark_icon.png" width="25px" alt="" class="checkmark">
            <img src="./images/cross_icon.png" width="25px" alt="" class="cross">
        </div>
        <div class="title-task1">
            <h2>Task 1</h2>
            <img src="./images/draganddrop.png" alt="icon">
        </div>
    </div>`
        taskArea[0].appendChild(clone); 
        inputField[0].value=''; 
        clone.styles.display = "flex"; 
    } 
}


sendbutton[0].addEventListener('click', submitInputField);
inputField[0].addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        submitInputField();
    }
});

// Drag and drop function

function addDragClass(e) {
    e.classList.add("dragging");
}

function removeDragClass(e) {
    e.classList.remove("dragging");
}

task1[0].addEventListener('dragstart', addDragClass(task1[0]));; 
task2[0].addEventListener('dragstart', addDragClass(task2[0])); 
task3[0].addEventListener('dragstart', addDragClass(task3[0])); 

/* task1[0].addEventListener('dragstart', removeDragClass(task1[0]));; 
task2[0].addEventListener('dragstart', removeDragClass(task2[0])); 
task3[0].addEventListener('dragstart', removeDragClass(task3[0])); */
