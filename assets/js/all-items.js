let accordianHeading = document.querySelectorAll("#all-items-accordian .heading")
let isAccordianExpanded = [];
let currentlyExpandedAccordian = 0;


for (let i = 0; i < accordianHeading.length; i++) {
    accordianHeading[i].addEventListener("click", () => {
        toggleArrow(i);
    });
    isAccordianExpanded[i] = false;
}

toggleArrow(currentlyExpandedAccordian);


function toggleArrow(index) {
    if (currentlyExpandedAccordian != index) {
        accordianHeading[currentlyExpandedAccordian].classList.remove("up");
        isAccordianExpanded[currentlyExpandedAccordian] = false; 
        currentlyExpandedAccordian = index;
    }
    if (!isAccordianExpanded[currentlyExpandedAccordian]) {
        accordianHeading[currentlyExpandedAccordian].classList.add("up"); 
        isAccordianExpanded[currentlyExpandedAccordian] = true;
    } else {
        accordianHeading[currentlyExpandedAccordian].classList.remove("up"); 
        isAccordianExpanded[currentlyExpandedAccordian] = false;
    }
}