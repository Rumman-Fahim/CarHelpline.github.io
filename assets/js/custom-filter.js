let currentActiveTabFilter = 0;
let tabContainerFilter= document.querySelector(".custom-filter .tab-container-filter");
let tabsFilter = document.querySelectorAll(".custom-filter .tab-filter");
let contentsFilter = document.querySelectorAll(".custom-filter .content-filter");
let arrowLHSFilter = document.querySelector(".custom-filter .arrow-btn-filter.lhs");
let arrowRHSFilter = document.querySelector(".custom-filter .arrow-btn-filter.rhs");


// ============================================================================== START
startFilterProcess();
errorCheckForActiveTabFilter();

// ============================================================================== CAROUSEL PROCESS
function startFilterProcess() {
    highlightActiveTabFilter(scrollToActiveTabFilter);
}
function highlightActiveTabFilter(cb1) {
    for (var i = 0; i < tabsFilter.length; i++) {
        tabsFilter[i].classList.remove("active");
    }
    tabsFilter[currentActiveTabFilter].classList.add("active");
    cb1();
}
function scrollToActiveTabFilter() {
    tabContainerFilter.scrollLeft =  tabsFilter[currentActiveTabFilter].offsetLeft;
    for (var i = 0; i < contentsFilter.length; i++) {
        if (contentsFilter[i].getAttribute("name") == currentActiveTabFilter) {
            contentsFilter[i].classList.add('display');
        } else {
            contentsFilter[i].classList.remove('display');
        }
    }
}
// ============================================================================== HANDLING CAROUSEL VIA TABSFilter
for (var i = 0; i < tabsFilter.length; i++) {
    tabsFilter[i].addEventListener("click",setCurrentActiveTabFilter);
}

function setCurrentActiveTabFilter(event) {
    currentActiveTabFilter = event.currentTarget.getAttribute("name");
    startFilterProcess();
}

// ============================================================================== HANDLING CAROUSEL VIA ARROWS
arrowLHSFilter.addEventListener("click",onClickingLeftArrow);
arrowRHSFilter.addEventListener("click",onClickingRightArrow);

function errorCheckForActiveTabFilter() {
    if (currentActiveTabFilter >= tabsFilter.length - 1) {
        currentActiveTabFilter = tabsFilter.length - 1;
        arrowRHSFilter.classList.add("disabled")
    } else if (currentActiveTabFilter <= 0 ) {
        currentActiveTabFilter = 0;
        arrowLHSFilter.classList.add("disabled")
    } else {
        arrowRHSFilter.classList.remove("disabled")
        arrowLHSFilter.classList.remove("disabled")
    }
}
function onClickingLeftArrow() {
    currentActiveTabFilter--;
    errorCheckForActiveTabFilter();
    startFilterProcess();
}
function onClickingRightArrow() {
    ++currentActiveTabFilter;
    errorCheckForActiveTabFilter();
    startFilterProcess();
}

