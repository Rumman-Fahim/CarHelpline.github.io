
let phoneModal = document.getElementById("phoneModal");
let phoneModalContent = document.getElementById("phoneModalContent");

let modal = document.getElementById("modal");
let modalContent = document.getElementById("modalContent");

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

function disableScrolling(){
    x = window.scrollX;
    y = window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
    document.querySelector("body").setAttribute("scroll","no");
    phoneModal.addEventListener('touchmove', preventDefault, { passive: false });
}

function enableScrolling(){
    window.onscroll=function(){};
    document.querySelector("body").setAttribute("scroll","yes");
    phoneModal.removeEventListener('touchmove', preventDefault, { passive: false });
}
function preventDefault(e){
    e.preventDefault();
}


function onclickCloseModal() {
    modal.style.display = "none";
    modal.style.opacity = "0";
    enableScrolling();
}

function onclickDisplayModal() {
    modal.style.display = "flex";
    modal.style.height = window.innerHeight + "px";
    modal.style.opacity = "1";
    disableScrolling();
}