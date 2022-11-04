"use strict";
function plusText() {
    document.getElementById("text-plus").style.display = "block";
    event.target.style.backgroundColor="green";
}

function plusColor() {
    document.getElementById("color-plus").style.backgroundColor = "orange";
    event.target.style.backgroundColor="green";
}

function plusX3() {
    document.getElementById("color-plus").style.transform = "scale(3)";
    event.target.style.backgroundColor="green";
    document.getElementById("removeButton4").style.backgroundColor = "white";
    document.getElementById("removeButton5").style.backgroundColor = "white";
}

function wigX2() {
    document.getElementById("color-plus").style.transform = "scaleX(2)";
    event.target.style.backgroundColor="green";
    document.getElementById("removeButton3").style.backgroundColor = "white";
    document.getElementById("removeButton5").style.backgroundColor = "white";
}


function heigX2() {
    document.getElementById("color-plus").style.transform = "scaleY(2)";
    event.target.style.backgroundColor="green";
    document.getElementById("removeButton4").style.backgroundColor = "white";
    document.getElementById("removeButton3").style.backgroundColor = "white";
}

function sirkle() {
    document.getElementById("color-plus").style.borderRadius = "50px";
    event.target.style.backgroundColor="green";
}


function none() {
    document.getElementById("color-plus").style.display = "none";
    event.target.style.backgroundColor="green";
    document.getElementById("removeButton8").style.backgroundColor = "white";
}

function show() {
    document.getElementById("color-plus").style.display = "inline-block";
    event.target.style.backgroundColor="green";
    document.getElementById("removeButton7").style.backgroundColor = "white";
}

function removeClass() {
    document.getElementById("color-plus").style.transform = "scaleX(1)";
    document.getElementById("color-plus").style.display = "inline-block";
    document.getElementById("color-plus").style.borderRadius = "0px";
    document.getElementById("color-plus").style.backgroundColor = "red";
    document.getElementById("text-plus").style.display = "none";
    document.getElementById("removeButton").style.backgroundColor = "white";
    document.getElementById("removeButton2").style.backgroundColor = "white";
    document.getElementById("removeButton3").style.backgroundColor = "white";
    document.getElementById("removeButton4").style.backgroundColor = "white";
    document.getElementById("removeButton5").style.backgroundColor = "white";
    document.getElementById("removeButton6").style.backgroundColor = "white";
    document.getElementById("removeButton7").style.backgroundColor = "white";
    document.getElementById("removeButton8").style.backgroundColor = "white";
   
    
}



