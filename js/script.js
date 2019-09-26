
jQuery( document ).ready(function($) {


    var counter = { var: 1968 };
    var tl = new TimelineMax();
    var vh = $(window).height();


    var split1 = new SplitText( $(".center__title-small"),{type:"chars", charsClass:"character"} );
    var split2 = new SplitText( $(".wrapp-screen-2__center__title--big"),{type:"chars", charsClass:"character"} );
    var split3 = new SplitText( $(".wrapp__box__half__paragraph--big"),{type:"chars,words", charsClass:"character"} );
    var split4 = new SplitText( $(".product-short-desc"),{type:"chars,words", charsClass:"character"} );
    var split5 = new SplitText( $(".product-title"),{type:"chars,words", charsClass:"character"} );
    var split6 = new SplitText( $(".product-desc"),{type:"chars,words", charsClass:"character"} );


    tl.staggerFrom(".center__title-small .character", 0.5, {ease: Power3.easeOut, y:100, autoAlpha:0}, 0.025);
    tl.from(".wrapp--screen-1__center", 3, {y:100}, "0");
    tl.from(".center__est", 1, {ease: Power3.easeOut, y:100, autoAlpha:0}, "0.5");
    tl.from(".center__unique", 0.8, {ease: Power3.easeOut, y:100, autoAlpha:0}, "0.6");
    tl.to(counter, 4, {
      var: 2018, 
      onUpdate: function () {
          $(".number").html(Math.ceil(counter.var));
      },
      ease:Power3.easeOut
  }, "0.5");
  
  tl.from(".image1", 3, {ease: Power3.easeOut, rotation:20, y:vh}, "2.2");
  tl.from(".image2", 3, {ease: Power3.easeOut, rotation:-15, y:vh}, "2.2");
  tl.from(".image3", 3, {ease: Power3.easeOut, rotation:-25, y:vh}, "2.2");
  tl.from(".wrapp--screen-2", 0.6, {ease: Power2.easeOut, y:"100%"}, "3.5");
  tl.from("header", 0.3, {ease: Power2.easeOut, y:-100}, "4.0");

  tl.staggerFrom(".wrapp-screen-2__center__title--big .character", 1, {ease: Power3.easeOut, y:"100%", scale:0.8}, 0.06, "4");
  tl.from(".wrapp-screen-2__center__unique__anim", 1, {ease: Power2.easeOut, y:35}, "5");
  tl.from(".wrapp-screen-2__center__est__anim", 1, {ease: Power2.easeOut, y:35}, "5");
  tl.to(".image1", 1, {ease: Power3.easeIn, rotation:-20, y:-vh}, "6.8");
  tl.to(".image2", 1, {ease: Power3.easeIn, rotation:15, y:-vh}, "6.8");
  tl.to(".image3", 1, {ease: Power3.easeIn, rotation:25, y:-vh}, "6.8");

  tl.to("header", 0.4, {ease: Power2.easeIn, y:-100}, "7");
  tl.to(".wrapp-screen-2__center__title--big--first .character:nth-child(8)", 0.3, {ease: Power3.easeIn, y:"-100%", scale:0.9, rotation:-15}, "7.3");
  tl.to(".wrapp-screen-2__center__title--big--first .character:nth-child(2)", 0.3, {ease: Power3.easeIn, y:"-100%", scale:0.9, rotation:-15}, "7.35");
  tl.to(".wrapp-screen-2__center__title--big--first .character:nth-child(4)", 0.3, {ease: Power3.easeIn, y:"-100%", scale:0.9, rotation:-15}, "7.37");
  tl.to(".wrapp-screen-2__center__title--big--first .character:nth-child(1)", 0.3, {ease: Power3.easeIn, y:"-100%", scale:0.9, rotation:-15}, "7.4");
  tl.to(".wrapp-screen-2__center__title--big--first .character:nth-child(5)", 0.3, {ease: Power3.easeIn, y:"-100%", scale:0.9, rotation:-15}, "7.4");
  tl.to(".wrapp-screen-2__center__title--big--first .character:nth-child(6)", 0.3, {ease: Power3.easeIn, y:"-100%", scale:0.9, rotation:-15}, "7.45");
  tl.to(".wrapp-screen-2__center__title--big--first .character:nth-child(3)", 0.3, {ease: Power3.easeIn, y:"-100%", scale:0.9, rotation:-15}, "7.45");
  tl.to(".wrapp-screen-2__center__title--big--first .character:nth-child(7)", 0.3, {ease: Power3.easeIn, y:"-100%", scale:0.9, rotation:-15}, "7.45");


  tl.to(".wrapp-screen-2__center__title--big--second .character:nth-child(2)", 0.3, {ease: Power3.easeIn, y:"-100%", scale:0.9, rotation:-15}, "7.65");
  tl.to(".wrapp-screen-2__center__title--big--second .character:nth-child(4)", 0.3, {ease: Power3.easeIn, y:"-100%", scale:0.9, rotation:-15}, "7.67");
  tl.to(".wrapp-screen-2__center__title--big--second .character:nth-child(1)", 0.3, {ease: Power3.easeIn, y:"-100%", scale:0.9, rotation:-15}, "7.7");
  tl.to(".wrapp-screen-2__center__title--big--second .character:nth-child(5)", 0.3, {ease: Power3.easeIn, y:"-100%", scale:0.9, rotation:-15}, "7.7");
  tl.to(".wrapp-screen-2__center__title--big--second .character:nth-child(6)", 0.3, {ease: Power3.easeIn, y:"-100%", scale:0.9, rotation:-15}, "7.75");
  tl.to(".wrapp-screen-2__center__title--big--second .character:nth-child(3)", 0.3, {ease: Power3.easeIn, y:"-100%", scale:0.9, rotation:-15}, "7.75");

  tl.to(".wrapp-screen-2__center__est__anim", 0.4, {ease: Power2.easeOut, y:"-100%"}, "7.2");
  tl.to(".wrapp-screen-2__center__unique__anim", 0.4, {ease: Power2.easeOut, y:"-100%"}, "7.4");

  tl.from(".introduction", 0.3, {ease: Power3.easeOut, autoAlpha:0}, "8");
  tl.from(".introduction", 1.3, {ease: Power3.easeOut, y: vh / 2}, "8");
  tl.staggerFrom(".wrapp__box__half__paragraph--big .character", 1, {ease: Power3.easeOut, autoAlpha:0}, 0.005, "8.3");
  tl.from(".wrapp__box__half__paragraph--big", 1.2, {ease: Power3.easeOut, y:"100%"}, "8.3");


  tl.from(".product-image", 0.5, {ease: Power3.easeOut, y:"40%", scale:1.1, autoAlpha:0}, "9.3");
  tl.staggerFrom(".product-short-desc .character", 1, {ease: Power3.easeOut, autoAlpha:0}, 0.005, "9.4");
  tl.from(".line-before", 0.3, {ease: Power3.easeOut, height:0}, "10.3");
  
  tl.staggerFrom(".product-title .character", 1, {ease: Power3.easeOut, autoAlpha:0}, 0.005, "9.5");
  tl.staggerFrom(".product-desc .character", 1, {ease: Power3.easeOut, autoAlpha:0}, 0.005, "9.7");
  tl.from(".numbering", 0.3, {ease: Power3.easeOut, autoAlpha:0, y: "100%"}, "10");
  tl.from(".next", 0.3, {ease: Power3.easeOut, autoAlpha:0}, "10.2");
  tl.add( function(){ $(".circle").css("stroke-dashoffset", "0"); }, "10.2");
  tl.from(".arrow ", 0.2, {ease: Power3.easeOut, autoAlpha:0}, "10.4")
  tl.from(".arrow ", 0.5, {ease: Power3.easeOut, width:0}, "10.4")
  

});

