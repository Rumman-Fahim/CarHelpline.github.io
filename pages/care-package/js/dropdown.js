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
    } else {
        dropdown[currentlyExpandedDropdown].classList.remove("up"); 
        flag_dropdown[currentlyExpandedDropdown] = false;
    }
}













let currentActiveCarouselTab = [];
let dropdownCrousel = document.getElementsByClassName("dropdown-content")
let tabContainer = document.getElementsByClassName("tab-container");
let contentMovableWrapper = document.getElementsByClassName("moving-wrapper");
let contents = document.getElementsByClassName("content");;
let tabs = document.getElementsByClassName("tab");
let hasUserClickedOnTab = false;
let arrowLHS = document.getElementsByClassName("lhs");
let arrowRHS = document.getElementsByClassName("rhs");
for (let i = 0; i < dropdownCrousel.length; i++) {
    currentActiveCarouselTab[i] = 0;
}
function setCurrentActiveCarouselTab() {
    tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click",setCurrentActiveTab);
    }
}
function getCurrentDropdownCarouselMovingWrapper() {
    contentMovableWrapper[currentlyExpandedDropdown].style.backgroundColor = "pink";
}
function getCurrentDropdownCarouselTabContainer() {
    tabContainer[currentlyExpandedDropdown].style.backgroundColor = "pink";
}
firstForAll();
function firstForAll() {
    for (var i = 0; i < dropdownCrousel.length; i++) {
        startCarouselProcess();
        currentlyExpandedDropdown++;
    }
    currentlyExpandedDropdown = 0;
}
// ============================================================================== CAROUSEL PROCESS
function startCarouselProcess() {
    highlightActiveTab(scrollToActiveTab,slideToActiveContent,updateCarouselToActiveContentHeight);
}
function highlightActiveTab(cb1, cb2, cb3) {
    tabs = document.getElementsByClassName("dropdown-content")[currentlyExpandedDropdown].getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    tabs[currentActiveCarouselTab[currentlyExpandedDropdown]].classList.add("active");
    cb1(cb2, cb3);
}
function scrollToActiveTab(cb1, cb2) {
    tabContainer[currentlyExpandedDropdown].scrollLeft =  tabs[currentActiveCarouselTab[currentlyExpandedDropdown]].offsetLeft;
    cb1(cb2);
}
function slideToActiveContent(cb1) {
    contentMovableWrapper[currentlyExpandedDropdown].style.left = "-" + (contentMovableWrapper[currentlyExpandedDropdown].offsetWidth * currentActiveCarouselTab[currentlyExpandedDropdown]) + "px";
    cb1();
}
function updateCarouselToActiveContentHeight() {
    contents = document.getElementsByClassName("dropdown-content")[currentlyExpandedDropdown].getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.position = "absolute";
        contents[i].style.left = 100 * i + "%";
    }
    contents[currentActiveCarouselTab[currentlyExpandedDropdown]].style.position = "relative";
}

// ============================================================================== HANDLING CAROUSEL VIA TABS
function setCurrentActiveTab(event) {
    hasUserClickedOnTab = true;
    currentActiveCarouselTab[currentlyExpandedDropdown] = event.currentTarget.getAttribute("name");
    startCarouselProcess();
}
setCurrentActiveCarouselTab();

// ============================================================================== HANDLING CAROUSEL VIA ARROWS
function setFuncFroAllArrows() {
    for (let i = 0; i < arrowLHS.length; i++) {
        arrowLHS[i].addEventListener("click",onClickingLeftArrow);
        arrowRHS[i].addEventListener("click",onClickingRightArrow);
    }
}
setFuncFroAllArrows();
function errorCheckForActiveTab() {
    if (currentActiveCarouselTab[currentlyExpandedDropdown] >= tabs.length - 1) {
        currentActiveCarouselTab[currentlyExpandedDropdown] = tabs.length - 1;
        arrowRHS[currentlyExpandedDropdown].classList.add("disabled")
    } else if (currentActiveCarouselTab[currentlyExpandedDropdown] <= 0 ) {
        currentActiveCarouselTab[currentlyExpandedDropdown] = 0;
        arrowLHS[currentlyExpandedDropdown].classList.add("disabled")
    } else {
        arrowRHS[currentlyExpandedDropdown].classList.remove("disabled")
        arrowLHS[currentlyExpandedDropdown].classList.remove("disabled")
    }
}

function onClickingLeftArrow() {
    hasUserClickedOnTab = true;
    currentActiveCarouselTab[currentlyExpandedDropdown]--;
    errorCheckForActiveTab();
    startCarouselProcess();
}

function onClickingRightArrow() {
    hasUserClickedOnTab = true;
    ++currentActiveCarouselTab[currentlyExpandedDropdown];
    errorCheckForActiveTab();
    startCarouselProcess();
}
