let flagModal = false;
let modal = document.getElementById("modal");
let phoneModal = document.getElementById("phoneModal");
let phoneModalContent = document.getElementById("phoneModalContent");

let flagPhoneModal = false;
let fixModalHeight;
function openPhoneModal() {
    flagPhoneModal = true;
    phoneModal.style.display = "flex";
    phoneModal.style.bottom = "0px !important";
    phoneModal.style.maxHeight = window.innerHeight + "px";
    phoneModal.style.minHeight = window.innerHeight + "px";
    phoneModal.style.height = window.innerHeight + "px";
    phoneModal.style.opacity = "1";
    setTimeout(()=>{ 
        phoneModalContent.style.bottom = "0";
    }, 100);
    // fixModalHeight = setInterval(fixPhoneModalHeight, 50);
    disableScrolling()
}

function closePhoneModal() {
    flagPhoneModal = false;
    phoneModalContent.style.bottom = "-100em";
    setTimeout(()=>{ 
        phoneModal.style.display = "none";
        phoneModal.style.maxHeight = 0 + "px";
        phoneModal.style.opacity = "0";
        clearInterval(fixModalHeight);
    }, 500);
    enableScrolling();
}

// window.addEventListener("scroll", function() {
//     fixPhoneModalHeight();
//  });

// function fixPhoneModalHeight() {
//     phoneModal.style.bottom = "0px !important";
//     phoneModal.style.maxHeight = window.innerHeight + "px";
//     phoneModal.style.minHeight = window.innerHeight + "px";
//     phoneModal.style.height = window.innerHeight + "px";
//     phoneModalContent.style.bottom = "0";
// }


function disableScrolling(){
    x = window.scrollX;
    y = window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
    document.getElementById("mainBody").setAttribute("scroll","no");
    disableScroll();
}

function enableScrolling(){
    window.onscroll=function(){};
    document.getElementById("mainBody").setAttribute("scroll","yes");
    enableScroll();
}


function preventDefault(e){
    e.preventDefault();
}

function disableScroll(){
    document.getElementById("mainBody").addEventListener('touchmove', preventDefault, { passive: false });
}
function enableScroll(){
    document.getElementById("mainBody").removeEventListener('touchmove', preventDefault, { passive: false });
}