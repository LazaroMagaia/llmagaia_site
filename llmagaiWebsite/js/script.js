
$(document).ready(function(){

    var navbar = $("#bars_button");
    var menu = $("#mobile_menu_toogle");

    navbar.click(function(){
        console.log("clicked")
        menu.slideToggle();
    });

    var textarea = document.getElementById("myTextarea");
    // Remove leading and trailing whitespace, including new lines
    textarea.value = textarea.value.replace(/^\s+|\s+$/g, '');
    
});