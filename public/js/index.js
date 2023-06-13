let vw = window.innerWidth;

const navbar = document.getElementById('navbar');

window.onscroll = () => {

    if (vw >= 1024){
        const scrolled = window.scrollY;

        if (scrolled > 550){
            // navbar.classList.add('scrolled_navbar');
            navbar.classList.add('bg-primary');
            navbar.classList.add('py-3');

            navbar.classList.remove('bg-transparent');
    
        } else if (scrolled <= 550){
            // navbar.classList.remove('scrolled_navbar');
            navbar.classList.remove('bg-primary');
            navbar.classList.remove('py-3');
    
            navbar.classList.add('bg-transparent');
        };
    }

};

const btn_menu = document.getElementById("btn-menu");
const btn_hubungi = document.getElementById("btn-hubungi");
const btn_kunjungi = document.getElementById("btn-kunjungi");
const btn_location = document.getElementById("btn-location");

btn_menu.addEventListener("click", () =>{
    window.location.href = "menu.html";
});

btn_hubungi.addEventListener("click", () =>{
    window.open("https://wa.me/+6287779272766?text=Halo%20saya%20ingin%20memesan%20kue");
});

btn_kunjungi.addEventListener("click", () =>{
    window.open("https://goo.gl/maps/wUB9Yspe7mdD91F39");
});

btn_location.addEventListener("click", () =>{
    window.open("https://goo.gl/maps/wUB9Yspe7mdD91F39");
});