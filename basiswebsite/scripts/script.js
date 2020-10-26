// JavaScript Document

var popup = document.querySelector("#popup");
var xbutton = document.querySelector("#popup button");

function closePopup(){
    popup.remove();
};

xbutton.addEventListener("click", closePopup);

