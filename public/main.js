window.onload = () => {
    init();
}

const init = () => {
    const topNavBar = document.querySelector(".navbar-top");
    const mobileNav = document.querySelector(".navigation");

    topNavBar.addEventListener("click" , (e) => {
        console.log("I've been clicked!");
        mobileNav.classList.toggle("nav-mobile-hidden");
    })
}


