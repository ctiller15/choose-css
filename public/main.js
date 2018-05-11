let slideIndex = 0;
let slides;

window.onload = () => {
    init();
}

const init = () => {
    const topNavBar = document.querySelector(".navbar-top");
    const mobileNav = document.querySelector(".navigation");
    slides = document.querySelectorAll(".carousel-img");
    console.log(slides);

    topNavBar.addEventListener("click" , (e) => {
        console.log("I've been clicked!");
        mobileNav.classList.toggle("nav-mobile-hidden");
    });

    displaySlide(slideIndex);
}

const displaySlide = (ind) => {
    slides[ind].style.display = "block";
}

const hideSlide = (ind) => {
    slides[ind].style.display = "none";
}

const changeSlide = (num) => {
    
    slideIndex += num;
    checkSlideLength();

    for(let i = 0; i < slides.length; i++){
        if(i === slideIndex){
            displaySlide(slideIndex);
        } else {
            hideSlide(i);
        }
    }

}

const checkSlideLength = () => {
    if(slideIndex > slides.length - 1){
        slideIndex = 0;
    } else if(slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
}


