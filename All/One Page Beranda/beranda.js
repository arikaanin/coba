window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    nav.classList.toggle('aktif', nav, windowPosition);
})

$(document).ready(function(){
    $(".redpopup").click(function(){
        $("#popup").toggle();
    })
    $(".bulan").click(function(){
        $(".tabpopup").toggle();
    })
})

function show_menu(){
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('slide');
}
