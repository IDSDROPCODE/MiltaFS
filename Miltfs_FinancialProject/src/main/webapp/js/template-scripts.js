//	function initMap() { 
//  const myLatlng = { lat: 11.008189755124192, lng: 77.00858388745662 };
//  const map = new google.maps.Map(document.getElementById("map"), {
//    zoom: 15,
//    center: myLatlng,
//  });
//  const marker = new google.maps.Marker({
//    position: myLatlng,
//    map,
//    title: "Click to zoom",
//  });
//  map.addListener("center_changed", () => {
//    // 3 seconds after the center of the map has changed, pan back to the
//    // marker.
//    window.setTimeout(() => {
//      map.panTo(marker.getPosition());
//    }, 3000);
//  });
//  marker.addListener("click", () => {
//    map.setZoom(8);
//    map.setCenter(marker.getPosition());
//  });
//}

jQuery(document).ready(function($) {
  
    $(".mapload").click(function (e) {
       e.preventDefault(); 
 var openmap =window.open("","mywindow","menubar=1,resizable=1,width=850,height=400","_blank");
 openmap.document.write("<iframe width='800' height='370' frameborder='0' scrolling='no'  marginheight='0'   marginwidth='0'  src='https://maps.google.com/maps?q=11.008189755124192,77.00858388745662&hl=es&z=14&amp;output=embed'  ></iframe>");
 
    }); 

 
  // Owl Carousel                     
  var owl = $('.carousel-default');
  owl.owlCarousel({
    nav: true,
    dots: true,
    items: 1,
    loop: true,
    navText: ["&#xe605","&#xe606"],
    autoplay: true,
    autoplayTimeout: 10000
  });

  // Owl Carousel - Content Blocks  
  var owl = $('.carousel-blocks');
  owl.owlCarousel({
    nav: false,
    dots: true,
    items: 6,
    responsive: {
      0: {
        items: 2
      },
      481: {
        items: 3
      },
      769: {
        items: 6
      }
    },
    loop: true,
    navText: ["&#xe605","&#xe606"],
    autoplay: true,
    autoplayTimeout: 10000
  });
  
  // Owl Carousel - Content 3 Blocks
  var owl = $('.carousel-3-blocks');
  owl.owlCarousel({
    nav: true,
    dots: true,
    items: 3,
    responsive: {
      0: {
        items: 1
      },
      481: {
        items: 2
      },
      769: {
        items: 3
      }
    },
    loop: true,
    navText: ["&#xe605","&#xe606"],
    autoplay: true,
    autoplayTimeout:10000
  });  
  
  var owl = $('.carousel-fade-transition');
  owl.owlCarousel({
    nav: true,
    dots: true,
    items: 1,
    loop: true,
    navText: ["&#xe605","&#xe606"],
    autoplay: true, 
    animateOut: 'fadeOut',
    autoplayTimeout: 10000
  });
  
  // skillbar
  $('.skillbar').bind('inview', function (event, visible) {
    if (visible) {  
      $('.skillbar').each(function(){
  	    $(this).find('.skillbar-bar').animate({
  	   	  width:$(this).attr('data-percent')
  	    },3000);
      });
       
    } 
  });
  
  
  // Sticky Nav Bar
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20){  
        $('.sticky').addClass("fixed");
    }
    else{
        $('.sticky').removeClass("fixed");
    }
  });
  
  
  // Custom scripts
  $('.carousel-center').owlCarousel({
    center: true,
    items:2,
    loop:true,
    nav: true,
    dots: false,
    margin:30,
    navText: ["&#xe605","&#xe606"],
    autoplay: true,
    autoplayTimeout: 10000,
    responsive: {
      0: {
        items: 1
      },
      481: {
        items: 2
      },
      769: {
        items: 2
      }
    },
  });
  
});