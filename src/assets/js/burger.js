$(document).ready(function() {
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").slideToggle( "" );
    });
});

document.getElementsByClassName("navbar-burger").onclick = function () {
    console.log("test");
}