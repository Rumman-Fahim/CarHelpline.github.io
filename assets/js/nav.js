let navbarCollapsePoint = 1120;
// ====================================================================================== Show Logo when at top, else show title
window.addEventListener("scroll", function() {
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    var navBottom = 5 * 16; 
    if (window.innerWidth <= navbarCollapsePoint) {
        if (st <= navBottom){
            document.getElementById("nav-logo").style.display = "block";
            document.getElementById("nav-title").style.display = "none";
        } else {
            document.getElementById("nav-logo").style.display = "none";
            document.getElementById("nav-title").style.display = "block";
        }
    } 
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
 }, false);
 
// ====================================================================================== Toggle Navbar
let openNavbarBtn = document.getElementById("btn-open-navbar");
let closeNavbarBtn = document.getElementById("btn-close-navbar");
let navbar = document.getElementById("navbar");

openNavbarBtn.addEventListener("click",expandNavbar);
closeNavbarBtn.addEventListener("click",collapseNavbar);

function expandNavbar() {
    navbar.classList.add("expand");
    navbar.style.height = window.innerHeight + 'px';

    x = window.scrollX;
    y = window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
    document.querySelector("body").setAttribute("scroll","no");
    document.querySelector("body").addEventListener('touchmove', preventDefault, { passive: false });
}
function collapseNavbar() {
    navbar.classList.remove("expand");
    navbar.style.height = window.innerHeight + 'px';
    window.onscroll=function(){};
    document.querySelector("body").setAttribute("scroll","yes");
    document.querySelector("body").removeEventListener('touchmove', preventDefault, { passive: false });
}

function preventDefault(e){
    e.preventDefault();
}

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
        collapseAllDropdownSubmenu();
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

function collapseAllDropdownSubmenu() {
    for (let i = 0; i < navbarDropdowns.length; i++) {
        navbarDropdowns[i].nextElementSibling.style.maxHeight = null;
    }
}
document.getElementById("nav").addEventListener("mouseleave",collapseAllDropdownSubmenu);
