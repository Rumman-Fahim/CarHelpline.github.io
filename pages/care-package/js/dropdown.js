let dropdown = document.getElementsByClassName("dropdown-arrow-btn");
let flag_dropdown = [];

let currentlyExpandedDropdown = 0;

for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", () => {
        toggleDropdownArrow(i);
    });
    
    flag_dropdown[i] = false;
}

function toggleDropdownArrow(index) {
    if (currentlyExpandedDropdown != index) {
        dropdown[currentlyExpandedDropdown].classList.remove("up");
        flag_dropdown[currentlyExpandedDropdown] = false; 
        currentlyExpandedDropdown = index;
    }

    if (!flag_dropdown[currentlyExpandedDropdown]) {
        dropdown[currentlyExpandedDropdown].classList.add("up"); 
        flag_dropdown[currentlyExpandedDropdown] = true;
        autoContentSlideShow();
    } else {
        dropdown[currentlyExpandedDropdown].classList.remove("up"); 
        flag_dropdown[currentlyExpandedDropdown] = false;
    }
}