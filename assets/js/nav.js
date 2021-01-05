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
