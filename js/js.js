document.getElementById("menu").classList.remove("hidden");
function menu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("hidden")
}

var galleryButtons = document.getElementsByClassName("galleryButton")
for(var i = 0; i < galleryButtons.length; i++){
    galleryButtons[i].addEventListener("click", showGallery)
    galleryButtons[i].nextElementSibling.classList.add("hidden");
    galleryButtons[i].innerHTML = "Show images"
}

function showGallery(){
    var gallery = this.nextElementSibling
    gallery.classList.toggle("hidden")
    if(this.innerHTML == "Show images"){
        this.innerHTML = "Hide images"
    }
    else{
        this.innerHTML = "Show images"
    }
}