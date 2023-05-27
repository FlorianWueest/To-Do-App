const taskArea = document.getElementById('taskArea');
const sendbutton = document.getElementsByClassName('sendbutton');
const inputField = document.getElementsByClassName('input-element');
const cross = document.getElementsByClassName('cross'); 

sendbutton[0].addEventListener('click', submitInputField);
inputField[0].addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        submitInputField();
    }
});

let counter = 3; 

function submitInputField(e) {
    counter += 1; 
    taskArea.innerHTML += `<div class="task1 mt-4" id="task${counter}" draggable="true">
    <div class="icons-task1"> 
        <img src="./images/checkmark_icon.png" width="25px" alt="" class="checkmark" onclick="checkmarkFunction('task${counter}')">
        <img src="./images/cross_icon.png" width="25px" alt="" class="cross" onclick="removeCrossFunction('task${counter}')">
    </div>
    <div class="title-task1">
        <h2>${inputField[0].value}</h2>
        <img src="./images/draganddrop.png" alt="icon">
    </div>
</div>`
    inputField[0].value = ""; 
}

function removeCrossFunction(e) {
    document.getElementById(e).style.display = "none";
}

function checkmarkFunction(e) {
    if (document.getElementById(e).style.textDecoration === "line-through") {
        document.getElementById(e).style.textDecoration = "none";
        document.getElementById(e).style.opacity = "1";
    } else {
        document.getElementById(e).style.textDecoration = "line-through"; 
        document.getElementById(e).style.opacity = "0.4";
    }
}

function eraseEverything(e) {
    taskArea.innerHTML = ""; 
}

// Droplet password: abraR12345678Abrar