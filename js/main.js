$(function () {

    var mixer = mixitup('.directions__list');

    $(".directions__filter-btn").on("click", function () {
        $(".directions__filter-btn").removeClass("directions__filter-btn--active")
        $(this).addClass("directions__filter-btn--active")

    })
   

$(".slider").slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: true,
    // dots: true,
    waitForAnimate: false,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
            slidesToShow: 3,
            
        }
        },
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 2,
        }
        },
        {
            breakpoint: 550,
            settings: {
            slidesToShow: 1,
        }
        },
    ]
    

})
$(".team__slider-prev").on("click", function (e) {
    e.preventDefault()
$(".slider").slick("slickPrev")
})
$(".team__slider-next").on("click", function (e) {
    e.preventDefault()
$(".slider").slick("slickNext")
})


$(".testimonials__slider").slick({
arrows: false,
dots: true,
appendDots: $(".testimonials__dots"),
responsive: [
    {
        breakpoint: 950,
        settings: {
        slidesToShow: 1,
        
    }
    },
    
]


})
$(".testimonials__prev").on("click", function (e) {
    e.preventDefault()
$(".testimonials__slider").slick("slickPrev")
})
$(".testimonials__next").on("click", function (e) {
    e.preventDefault()
$(".testimonials__slider").slick("slickNext")
})
// $(".program__acc-link").on("click", function (e) {
//     e.preventDefault()
//     $(this).toggleClass("program__acc-link--active")
//     $(this).children(".program__acc-text").slideToggle()

// }) /*код для аккордеона, где открыты все вкладки)*/
$(".program__acc-link").on("click", function (e) {
    e.preventDefault()
    if ($(this).hasClass("program__acc-link--active")) {
        $(this).removeClass("program__acc-link--active")
        $(this).children(".program__acc-text").slideUp()
    } else {
        $(".program__acc-link").removeClass("program__acc-link--active")
        $(".program__acc-text").slideUp()
        $(this).addClass("program__acc-link--active")
        $(this).children(".program__acc-text").slideDown()
    }
})
    
        $(".header__nav-list a, .header__top-btn").on("click", function (e) {
                    e.preventDefault()
                    var id  = $(this).attr('href'),
                    top = $(id).offset().top
                    $('body,html').animate({scrollTop: top}, 1500)
  
    })

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 0) {
            $(".burger").addClass("burger--follow")
        } else { 
        $(".burger").removeClass("burger--follow")
    } 
    })
    $(".burger, .overlay, .header__top a").on("click", function (e) {
    e.preventDefault()
    $(".header__top").toggleClass("header__top--open")
    $(".overlay").toggleClass("overlay--show")
})
$(".footer__top-title--slide").on("click", function (e) {
    $(this).next().slideToggle()
})
})
