(function () {
    var header = document.querySelector(".header");
    var start = window.pageYOffset;
    //var demoVideo = document.getElementById("demo-video");
    //var demoDescription = document.getElementById(".demo-decription");
    //demoVideo.style.setProperty("height", `calc(90vh + ${demoDescription.offsetHeight}px)`);
    window.addEventListener('scroll', function () {
        if (window.pageYOffset == start || !header.classList.contains('header-show')) {
            header.classList.toggle('header-show');
        }
    })
    var toggleMenu = document.getElementById("toggle-menu");
    var mainMenu = document.getElementById("main-menu");
    toggleMenu.addEventListener('click', function () {
        mainMenu.classList.toggle('is-open');
    })
})();