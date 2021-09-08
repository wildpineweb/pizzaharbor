/* jQuery for the navigation animation */

var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
});

/* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    var $html = $("html");
    var $navbarMenu = $(".navbar-menu");
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");
    let getSidebarVisibility = document.querySelector(".side-nav");

    if (toggleNavStatus === false) {

        getSidebarVisibility.style.visibility = "visible";
        getSidebar.style.overflow = "visible";

        getSidebarLinks.forEach((item, index) => {
            console.log(item);
            item.style.opacity = "1";
            item.style.visibility = "visible";
        });
        getSidebar.style.width = "60%";
        getSidebar.style.overflow = "visible";
        $html.addClass("clicked");
        $navbarMenu.addClass("clicked")
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {

        getSidebarLinks.forEach((item, index) => {
            item.style.opacity = "0";
            item.style.transitionDelay = "0s";
            item.style.visibility = "hidden";
        });
        getSidebar.style.overflow = "visible";
        getSidebar.style.width = "0";
        $navbarMenu.removeClass("clicked")
        $html.removeClass("clicked");
        toggleNavStatus = false;
    }
}

/* Navigation */
var $navbarMenu = $(".navbar-menu");
var $sideNavA = $(".side-nav a");
var $isActiveHamburger = $(".hamburger.is-active .hamburger-inner::after");
var $hamburgerInner = $(".hamburger-inner");
var $mobileNav = $(".mobile-nav");

/* Applicant SSN automated dashes in Application Form */
const ssn = document.getElementById('ssn');

ssn.addEventListener("keydown", (e) => {
    if(e.key === "Backspace" || e.key === "Delete") return;
    if(e.target.value.length === 3) {
        ssn.value = ssn.value + "-";
    }
    if(e.target.value.length === 6) {
        ssn.value = ssn.value + "-";
    }
});

/* Co-Applicant SSN automated dashes in Application Form */
const coSSN = document.getElementById('co-ssn');

coSSN.addEventListener("keydown", (e) => {
    if(e.key === "Backspace" || e.key === "Delete") return;
    if(e.target.value.length === 3) {
        coSSN.value = coSSN.value + "-";
    }
    if(e.target.value.length === 6) {
        coSSN.value = coSSN.value + "-";
    }
});

/* SSN Number Only Requirement */
function isNumber(e){
    e = e || window.event;
    var charCode = e.which ? e.which : e.keyCode;
    return /\d/.test(String.fromCharCode(charCode));
}