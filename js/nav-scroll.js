//navbar style changes once it intersects scroll trigger 1
const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".scroll-trigger1");
const dropdown1 = document.getElementById("dropdown-menu1");
const dropdown1Arrow = document.getElementById("dropdown-menu1-arrow");
const dropdown2 = document.getElementById("dropdown-menu2");
const dropdown2Arrow = document.getElementById("dropdown-menu2-arrow");
const dropdown3 = document.getElementById("dropdown-menu3");
const dropdown3Arrow = document.getElementById("dropdown-menu3-arrow");

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add("nav-bar-scrolled");
            dropdown1.style.opacity = ".9";
            dropdown2.style.opacity = ".9";
            dropdown3.style.opacity = ".9";
            dropdown1Arrow.style.opacity = ".9";
            dropdown2Arrow.style.opacity = ".9";
            dropdown3Arrow.style.opacity = ".9";
        } else{
            nav.classList.remove("nav-bar-scrolled");
            dropdown1.style.opacity = ".6";
            dropdown2.style.opacity = ".6";
            dropdown3.style.opacity = ".8";
            dropdown1Arrow.style.opacity = ".6";
            dropdown2Arrow.style.opacity = ".6";
            dropdown3Arrow.style.opacity = ".6";
        }
    });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);