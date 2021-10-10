document.getElementById("btn-left").disabled = true;
document.getElementById("btn-left").style.cursor = "auto";

document.getElementById("btn-right").onclick = function() {
    document.getElementById("img-slider").classList.remove("img-slide-left")
    document.getElementById("img-slider").classList.add("img-slide-right")
    document.getElementById("tanya-art").classList.remove("text-fade-in")
    document.getElementById("john-art").classList.remove("text-fade-out")
    document.getElementById("tanya-art").classList.add("text-fade-out")
    document.getElementById("john-art").classList.add("text-fade-in")
    document.getElementById("btn-left").disabled = false;
    document.getElementById("btn-right").disabled = true;
    document.getElementById("btn-right").style.cursor = "auto";
    document.getElementById("btn-left").style.cursor = "pointer";
}

document.getElementById("btn-left").onclick = function() {
    document.getElementById("img-slider").classList.remove("img-slide-right")
    document.getElementById("img-slider").classList.add("img-slide-left")
    document.getElementById("tanya-art").classList.remove("text-fade-out")
    document.getElementById("john-art").classList.remove("text-fade-in")
    document.getElementById("tanya-art").classList.add("text-fade-in")
    document.getElementById("john-art").classList.add("text-fade-out")
    document.getElementById("btn-right").disabled = false;
    document.getElementById("btn-left").disabled = true;
    document.getElementById("btn-left").style.cursor = "auto";
    document.getElementById("btn-right").style.cursor = "pointer";
}