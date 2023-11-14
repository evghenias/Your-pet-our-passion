$(document).ready(function(){
  $(".testmonial_slider_area").owlCarousel({
    items: 4, 
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
  $(".carousel-slider").owlCarousel({
    items: 3, 
    autoplay: true,
    slideSpeed:1000,
    items : 3,
    loop: true,
    nav:true,
    navText:['<i class="fa fa-angle-left" style="font-size:36px"></i>','<i class="fa fa-angle-right" style="font-size:36px"></i>'],
    margin: 10,
    dots: true,
    responsive:{
        414:{
            items:1
        },
        767:{
            items:2
        },
        1024:{
            items:2
        },
        1440:{
            items:3
        }
    }
  });
  $(".carousel-slider-3").owlCarousel({
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
            items:2
        },
        1440:{
            items:4
        }
    }
  });
});




