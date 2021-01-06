let navbarCollapsePoint = 1120;
let scrollNavLogo = false;
const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)
// ====================================================================================== Show Logo when at top, else show title
window.addEventListener('resize', handleTypeOfLogoShown);
handleTypeOfLogoShown();
function handleNavLogoImgOnScroll() {
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    var navBottom = 5 * 16; 
    if (window.innerWidth <= navbarCollapsePoint) {
        if (st <= navBottom){
            showOnlyNavLogo();
        } else {
            showOnlyNavTitle();
        }
    } 
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}

function handleTypeOfLogoShown() {
    if (window.innerWidth <= navbarCollapsePoint) {
        showOnlyNavTitle();
    } else {
        showOnlyNavLogo();
    }
}
function showOnlyNavTitle() {
    document.getElementById("nav-logo").style.display = "none";
    document.getElementById("nav-title").style.display = "block";
}
function showOnlyNavLogo() {
    document.getElementById("nav-logo").style.display = "block";
    document.getElementById("nav-title").style.display = "none";
}

// ====================================================================================== Toggle Navbar
let openNavbarBtn = document.getElementById("btn-open-navbar");
let closeNavbarBtn = document.getElementById("btn-close-navbar");
let navbar = document.getElementById("navbar");

openNavbarBtn.addEventListener("click",expandNavbar);
closeNavbarBtn.addEventListener("click",collapseNavbar);

function expandNavbar() {
    navbar.classList.add("expand");
    navbar.style.minHeight = window.innerHeight + 'px';
    x = window.scrollX;
    y = window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
    document.querySelector("body").setAttribute("scroll","no");
    // document.querySelector("body").addEventListener('touchmove', preventDefault, { passive: false });
}
function collapseNavbar() {
    navbar.classList.remove("expand");
    navbar.style.minHeight = window.innerHeight + 'px';
    window.onscroll=function(){};
    document.querySelector("body").setAttribute("scroll","yes");
    // document.querySelector("body").removeEventListener('touchmove', preventDefault, { passive: false });
}
navbar.addEventListener("click",(e)=>{
    if(e.target !== e.currentTarget) return;
    collapseNavbar();
});
// ====================================================================================== Dropdown Submenus
let navbarDropdowns = document.querySelectorAll(".navbar-dropdown .toggle-btn")

for (let i = 0; i < navbarDropdowns.length; i++) {
    navbarDropdowns[i].addEventListener("click", toggleDropdownSubmenu);
}

function toggleDropdownSubmenu(dropdown) {
    let content = dropdown.currentTarget.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        if (window.innerWidth > navbarCollapsePoint) {
            collapseAllDropdownSubmenu();
        }
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

function collapseAllDropdownSubmenu() {
    for (let i = 0; i < navbarDropdowns.length; i++) {
        navbarDropdowns[i].nextElementSibling.style.maxHeight = null;
    }
}
document.getElementById("nav").addEventListener("mouseleave",collapseAllDropdownSubmenu);

let phoneModal = document.getElementById("phoneModal");
let phoneModalContent = document.getElementById("phoneModalContent");

let modal = document.getElementById("modal");
let modalContent = document.getElementById("modalContent");

if (modal != null) {
    modal.addEventListener("click",(e)=>{
        if(e.target !== e.currentTarget) return;
        onclickCloseModal();
    });
}
phoneModal.addEventListener("click",(e)=>{
    if(e.target !== e.currentTarget) return;
    closePhoneModal();
});

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