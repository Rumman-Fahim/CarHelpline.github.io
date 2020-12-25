
// Declaring the Elements
let navlinks;
let slider;
let toggleBtn;
let flagNavbar;
let nav;
let navbar;
let navTitle;
let navPhone;

let navbarDropdownSubmenu = document.getElementById("navbar-dropdown-submenu")
let flagNavbarDropdownSubmenu = false;

// After Page Loads ... 
window.onload = function setFuncForNavlinks() {
    // ... initialise the elements and ...
    navlinks = document.getElementsByClassName("nav-links");
    slider = document.getElementById("slider");
    toggleBtn = document.getElementById("nav-toggle");
    nav = document.getElementById("nav");
    flagNavbar = false;
    navbar = document.getElementById("navbar");
    smNavlogo = document.getElementById("sm-nav-logo");
    smNavTitle = document.getElementById("sm-nav-title");
    navPhone = document.getElementById("navPhone");
    
    // ... call any required functions
    addEventsToNavlinks();
    addFuncToToggleBtn();
    toggleNavbar();
    nav.addEventListener("mouseleave", closeDropDownMenu);
    navbarDropdownSubmenu.addEventListener("mouseleave", closeSubMenu);
}

window.addEventListener("scroll", function() {
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   var navBottom = 5 * 16; 
   if (st <= navBottom){
    smNavlogo.style.display = "block";
    smNavTitle.style.display = "none";
   } else {
    smNavlogo.style.display = "none";
    smNavTitle.style.display = "block";
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

// Adding events to the links using for loop 
function addEventsToNavlinks() {
    for(var i = 0; i < navlinks.length; i++) {
        navlinks[i].addEventListener("click",moveSliderToActiveLink);
    }
}


// Slide the slider element to active link
function moveSliderToActiveLink(event) {
    let activeLink;
    if (window.innerWidth <= 1024) {
        activeLink = event.currentTarget.firstElementChild;
        slider.style.height = activeLink.offsetHeight + 5 + "px";
        slider.style.top = activeLink.offsetTop + "px";
    } else {
        activeLink = event.currentTarget;
        slider.style.height = "0px";
        slider.style.top = activeLink.offsetHeight + "px";
    }
    slider.style.width = activeLink.offsetWidth + "px";
    slider.style.left = activeLink.offsetLeft + "px";
}

// Adding Function to Toggle Button
function addFuncToToggleBtn() {
    toggleBtn.addEventListener("click",toggleNavbar);
}

// Toggle Button Functionalities 
function toggleNavbar() {
    if (!flagNavbar) {
        toggleBtn.classList.remove("cross"); 
        nav.classList.remove("expand");
        flagNavbar = true;
        closeSubMenu();
    } else {
        toggleBtn.classList.add("cross"); 
        nav.classList.add("expand");
        flagNavbar = false;
    }
}

function closeDropDownMenu() {
    toggleBtn.classList.remove("cross"); 
    nav.classList.remove("expand");
    flagNavbar = true;
}

function closeSubMenu() {
    navbarDropdownSubmenu.style.maxHeight = "0";
    flagNavbarDropdownSubmenu = false;
}
function openSubMenu() {
    flagNavbarDropdownSubmenu = !flagNavbarDropdownSubmenu;
    if (flagNavbarDropdownSubmenu) {
        navbarDropdownSubmenu.style.maxHeight = "100em";
    } else {
        navbarDropdownSubmenu.style.maxHeight = "0";
    }
}
