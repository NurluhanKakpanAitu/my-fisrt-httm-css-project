const nav = document.querySelector("#nav");
const nav_button = document.querySelector("#nav-button");
const nav_button_image = document.querySelector("#nav-button-image");

nav_button.onclick = () =>{
    if(nav.classList.toggle('open')){
        nav_button_image.src = './img/NAV CLOSE.svg'
    }
    else{
        nav_button_image.src = './img/NAV.svg'
    }
}