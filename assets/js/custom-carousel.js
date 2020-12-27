let currentActiveTab = -1;
let tabContainer= document.querySelector(".tab-container");
let tabs = document.querySelectorAll(".custom-carousel .tab");
let contentMovableWrapper = document.querySelector(".custom-carousel .moving-wrapper");
let contents = document.querySelectorAll(".custom-carousel .content");
let hasUserClickedOnTab = false;
let arrowLHS = document.querySelector(".custom-carousel .arrow-btn.lhs");
let arrowRHS = document.querySelector(".custom-carousel .arrow-btn.rhs");

autoContentSlideShow();

// ============================================================================== AUTO SLIDE SHOW
function autoContentSlideShow() {
    if (!hasUserClickedOnTab) {
        currentActiveTab++
        if (currentActiveTab >= tabs.length - 1) {
            currentActiveTab = 0;
        }
        startCarouselProcess();
        setTimeout(()=>{
            autoContentSlideShow();
        }, 4000);
    }
}

// ============================================================================== CAROUSEL PROCESS
function startCarouselProcess() {
    highlightActiveTab(scrollToActiveTab,slideToActiveContent,updateCarouselToActiveContentHeight);
}
function highlightActiveTab(cb1, cb2, cb3) {
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    tabs[currentActiveTab].classList.add("active");
    cb1(cb2, cb3);
}
function scrollToActiveTab(cb1, cb2) {
    tabContainer.scrollLeft =  tabs[currentActiveTab].offsetLeft;
    cb1(cb2);
}
function slideToActiveContent(cb1) {
    contentMovableWrapper.style.left = "-" + (contentMovableWrapper.offsetWidth * currentActiveTab) + "px";
    cb1();
}
function updateCarouselToActiveContentHeight() {
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.position = "absolute";
        contents[i].style.left = 100 * i + "%";
    }
    contents[currentActiveTab].style.position = "relative";
}

// ============================================================================== HANDLING CAROUSEL VIA TABS
for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click",setCurrentActiveTab);
}

function setCurrentActiveTab(event) {
    hasUserClickedOnTab = true;
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
    hasUserClickedOnTab = true;
    currentActiveTab--;
    errorCheckForActiveTab();
    startCarouselProcess();
}

function onClickingRightArrow() {
    hasUserClickedOnTab = true;
    ++currentActiveTab;
    errorCheckForActiveTab();
    startCarouselProcess();
}

