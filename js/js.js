document.getElementById("menu").classList.remove("hidden");
function menu() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}

var galleryButtons = document.getElementsByClassName("galleryButton")
for(var i = 0; i < galleryButtons.length; i++){
    galleryButtons[i].addEventListener("click", showGallery)
    galleryButtons[i].nextElementSibling.classList.add("hidden");
    galleryButtons[i].innerHTML = "Show images"
}

function showGallery(){
    var gallery = this.nextElementSibling
    if (gallery.classList.contains("hidden")) {
        gallery.classList.remove("hidden");
        this.innerHTML = "Hide images"
    } else {
        gallery.classList.add("hidden");
        this.innerHTML = "Show images"
    }
}