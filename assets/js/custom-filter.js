let currentActiveTab = 0;
let tabContainer= document.querySelector(".tab-container");
let tabs = document.querySelectorAll(".custom-filter .tab");
let contents = document.querySelectorAll(".custom-filter .content");
let arrowLHS = document.querySelector(".custom-filter .arrow-btn.lhs");
let arrowRHS = document.querySelector(".custom-filter .arrow-btn.rhs");


// ============================================================================== START
startCarouselProcess();
errorCheckForActiveTab();

// ============================================================================== CAROUSEL PROCESS
function startCarouselProcess() {
    highlightActiveTab(scrollToActiveTab);
}
function highlightActiveTab(cb1) {
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    tabs[currentActiveTab].classList.add("active");
    cb1();
}
function scrollToActiveTab() {
    tabContainer.scrollLeft =  tabs[currentActiveTab].offsetLeft;
    for (var i = 0; i < contents.length; i++) {
        if (contents[i].getAttribute("name") == currentActiveTab) {
            contents[i].classList.add('display');
        } else {
            contents[i].classList.remove('display');
        }
    }
}
// ============================================================================== HANDLING CAROUSEL VIA TABS
for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click",setCurrentActiveTab);
}

function setCurrentActiveTab(event) {
    currentActiveTab = event.currentTarget.getAttribute("name");
    startCarouselProcess();
}

// ============================================================================== HANDLING CAROUSEL VIA ARROWS
arrowLHS.addEventListener("click",onClickingLeftArrow);
arrowRHS.addEventListener("click",onClickingRightArrow);

function errorCheckForActiveTab() {
    if (currentActiveTab >= tabs.length - 1) {
        currentActiveTab = tabs.length - 1;
        arrowRHS.classList.add("disabled")
    } else if (currentActiveTab <= 0 ) {
        currentActiveTab = 0;
        arrowLHS.classList.add("disabled")
    } else {
        arrowRHS.classList.remove("disabled")
        arrowLHS.classList.remove("disabled")
    }
}
function onClickingLeftArrow() {
    currentActiveTab--;
    errorCheckForActiveTab();
    startCarouselProcess();
}
function onClickingRightArrow() {
    ++currentActiveTab;
    errorCheckForActiveTab();
    startCarouselProcess();
}

