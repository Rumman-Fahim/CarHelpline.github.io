let flagModal = false;
let modal = document.getElementById("modal");
let phoneModal = document.getElementById("phoneModal");
let phoneModalContent = document.getElementById("phoneModalContent");

let flagPhoneModal = false;

function openPhoneModal() {
    flagPhoneModal = true;
    phoneModal.style.display = "flex";
    phoneModal.style.maxHeight = window.innerHeight + "px";
    phoneModal.style.opacity = "1";
    setTimeout(()=>{ 
        phoneModalContent.style.bottom = "0";
    }, 100);
}

function closePhoneModal() {
    flagPhoneModal = false;
    phoneModalContent.style.bottom = "-100em";
    setTimeout(()=>{ 
        phoneModal.style.display = "none";
        phoneModal.style.maxHeight = 0 + "px";
        phoneModal.style.opacity = "0";
    }, 500);
}

onclickCloseModal();
console.log(flagModal);

function onclickDisplayModal() {
    flagModal = true;
    modal.style.display = "flex";
    modal.style.opacity = "1";
    modal.style.maxHeight = window.innerHeight + "px";
}
function onclickCloseModal() {
    flagModal = false;
    modal.style.display = "none";
    modal.style.opacity = "0";
    modal.style.maxHeight = 0 + "px";
}