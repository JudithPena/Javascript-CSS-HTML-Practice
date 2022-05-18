//Активирует бургер меню
$(document).ready(function () {
    $(".header__btn").click(function(event) {
        $(".header__btn, .header__list").toggleClass("active");
    });
});

// Меняет и сохраняет в локал сторэдж тему сайта
$(document).ready(function() { 
    if (localStorage.getItem('dark') == 'active') {
      $('.body').addClass('dark-theme ');
    
    }
});
$(".change-theme").click(function() {
   $('.body').toggleClass('dark-theme');
    if (localStorage.getItem('dark') == 'active') {
      localStorage.removeItem("dark", "active");
      
    } else {
      localStorage.setItem("dark", "active");
    }
});
