$(".testmonial_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed:1000,
    items : 4,
    loop: true,
    nav:true,
    navText:['<i class="fa fa-angle-left" style="font-size:36px"></i>','<i class="fa fa-angle-right" style="font-size:36px"></i>'],
    margin: 30,
    dots: true,
    responsive:{
        414:{
            items:1
        },
        767:{
            items:2
        },
        1024:{
            items:3
        },
        1440:{
            items:4
        }
    }
    
});

