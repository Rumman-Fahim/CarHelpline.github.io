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
    fixModalHeight = setInterval(fixPhoneModalHeight, 50);
    $('body').addClass('stop-scrolling')
    $('body').bind('touchmove', function(e){e.preventDefault()})
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
    $('body').removeClass('stop-scrolling')
    $('body').unbind('touchmove')
}

window.addEventListener("scroll", function() {
    fixPhoneModalHeight();
 });

function fixPhoneModalHeight() {
    phoneModal.style.bottom = "0px !important";
    phoneModal.style.maxHeight = window.innerHeight + "px";
    phoneModal.style.minHeight = window.innerHeight + "px";
    phoneModal.style.height = window.innerHeight + "px";
    phoneModalContent.style.bottom = "0";
}
