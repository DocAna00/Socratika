// Textarea counter
const textarea = document.querySelector('.content__form-textarea');
const counter = document.querySelector('.content__textarea-counter');
const maxLength = textarea.maxLength;
const updateCounter = (e) => {
    const len = e ? e.target.value.length : 0;
    counter.textContent = `${len} / ${maxLength}`;
}
updateCounter();
textarea.addEventListener('keyup', updateCounter);
textarea.addEventListener('keydown', updateCounter);

//Cross (clear input)
const input = document.querySelector('.content__form-input');
const clearBtn = document.querySelector('.content__form-clear');

function toggleClearBtn() {
    clearBtn.style.opacity = input.value.trim() ? 1 : 0;
    clearBtn.style.cursor = "pointer";
}

function clearInput() {
    input.value = "";
    toggleClearBtn();
}

input.addEventListener("input", toggleClearBtn);
clearBtn.addEventListener("click", clearInput);

//Add a new chip
input.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        const chips = document.querySelector('.content__form-chips');
        const value = input.value;
        const div = document.createElement('div');
        div.classList.add('content__form-chip');
        div.innerHTML = value;
        chips.append(div);
    }
})

//Show more chips
function showMoreChips() {
    let moreChips = document.querySelectorAll('.hidden');

    moreChips.forEach(function (div) {
        div.style.display = 'flex';
    })
}

//Textarea validation
function checkLength() {
    stringLength = document.querySelector('.content__form-textarea').value.length;
    if (stringLength >= 200) {
        document.querySelector('.content__textarea-warning').innerText = "Maximum characters are 200";
        document.querySelector('.content__form-textarea').style.borderColor = "#FF395D";
        document.querySelector('.content__textarea-label').style.color = "#FF395D";
    } else {
        document.querySelector('.content__textarea-warning').innerText = "";
        document.querySelector('.content__form-textarea').style.borderColor = "#5CBEFE";
        document.querySelector('.content__textarea-label').style.color = "#343434";
    }
}

//Disabled button
function toggleButton() {
    let input = document.querySelector('.content__form-input').value;
    let textarea = document.querySelector('.content__form-textarea').value;

    if (input && textarea) {
        document.querySelector('.next-btn').disabled = false;
        document.querySelector('.next-btn').innerHTML = "Создать презентацию";
    } else if (textarea.value !== '') {
        document.querySelector('.next-btn').disabled = false;
        document.querySelector('.next-btn').innerHTML = "Создать презентацию";
    } else {
        document.querySelector('.next-btn').disabled = true;
    }
}




