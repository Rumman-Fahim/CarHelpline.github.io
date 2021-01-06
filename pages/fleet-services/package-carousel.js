let currentActiveContent = 0;
let contentMovableWrapper_2 = document.querySelector(".custom-carousel-2 .moving-wrapper");
let contents_2 = document.querySelectorAll(".custom-carousel-2 .content.img");
let arrowLHS_2 = document.querySelector(".custom-carousel-2 .arrow-btn.lhs");
let arrowRHS_2 = document.querySelector(".custom-carousel-2 .arrow-btn.rhs");


// ============================================================================== HANDLING CAROUSEL VIA ARROWS
arrowLHS_2.addEventListener("click",onClickingLeftArrow2);
arrowRHS_2.addEventListener("click",onClickingRightArrow2);

function errorCheckForActiveContent() {
    if (currentActiveContent >= contents_2.length - 1) {
        currentActiveContent = contents_2.length - 1;
        arrowRHS_2.classList.add("disabled")
    } else if (currentActiveContent <= 0 ) {
        currentActiveContent = 0;
        arrowLHS_2.classList.add("disabled")
    } else {
        arrowRHS_2.classList.remove("disabled")
        arrowLHS_2.classList.remove("disabled")
    }
}

function onClickingLeftArrow2() {
    --currentActiveContent;
    errorCheckForActiveContent();
    contentMovableWrapper_2.scrollLeft =  contents_2[currentActiveContent].offsetLeft;
}

function onClickingRightArrow2() {
    ++currentActiveContent;
    errorCheckForActiveContent();
    contentMovableWrapper_2.scrollLeft =  contents_2[currentActiveContent].offsetLeft;
}
