let formDropdown = document.getElementById("form-dropdown");
let flagFormDropdown = true;
let options = document.getElementsByClassName("form-dropdown-option");
let selectedOption = document.getElementById("selectedOption");

toggleFormDropdown();
addEventsToFormDropdownOptions();

function toggleFormDropdown() {
    flagFormDropdown = !flagFormDropdown;
    if (flagFormDropdown) {
        formDropdown.style.maxHeight = "20em";
    } else {
        formDropdown.style.maxHeight = "0";
    }
}

function closeFormDropdown() {
    flagFormDropdown = false;
    formDropdown.style.maxHeight = "0";
}

function addEventsToFormDropdownOptions() {
    for(var i = 0; i < options.length; i++) {
        options[i].addEventListener("click",selectFormDropdownOptions);
    }
}

function selectFormDropdownOptions(event) {
    console.log(event.currentTarget.innerHTML);
    updateSelectedOption(event.currentTarget.innerHTML)
}

function updateSelectedOption(string) {
    selectedOption.innerHTML = string;
    closeFormDropdown();
}