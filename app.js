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


/* Image Carousel */
$(function() {

	new Slider({
        images: '.slider img',
        btnPrev: '.slider .buttons .prev',
        btnNext: '.slider .buttons .next',
        auto: true,
        rate: 5000
    });

});


function Slider(obj) {

	this.images = $(obj.images);
	this.auto = obj.auto;
	this.btnPrev = obj.btnPrev;
	this.btnNext = obj.btnNext;
    this.rate = obj.rate || 1000;

	var i = 0;
    var slider = this;

    // The "Previous" button: to remove the class .shoved, show the previous image and add the .shoved class
	this.prev = function () {
		slider.images.eq(i).removeClass('shown');
		i--;

		if (i < 0) {
			i = slider.images.length - 1;
		}

		slider.images.eq(i).addClass('shown');
	}

    // The "Next" button: to remove the class .shoved, show the next image and add the .shoved class
	this.next = function () {
		slider.images.eq(i).removeClass('shown');
		i++;

		if (i >= slider.images.length) {
			i = 0;
		}

		slider.images.eq(i).addClass('shown');
	}

    // To add next and prev functions when clicking the corresponding buttons
    $(slider.btnPrev).on('click', function(){ slider.prev();});
    $(slider.btnNext).on('click', function(){ slider.next();});

    // For the automatic slider: this method calls the next function at the set rate
	if (slider.auto)	{
        setInterval(slider.next, slider.rate);
    }
};