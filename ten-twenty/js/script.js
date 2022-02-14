TweenLite.defaultEase = Linear.easeNone;
const content = document.querySelectorAll(".content");
const controller = new ScrollMagic.Controller();

const t1 = new TimelineMax();




function myFunction(x) {
  if (x.matches) { // If media query matches
    t1.to("#js-slideContainer", 0.5, { yPercent: -100 });
    t1.from(content[1], 0.5, {});
    // opacity: 0, scale: 2.5 
    t1.to("#js-slideContainer", 0.5, { yPercent: -300 });
    t1.from(content[2], 0.5, {});
    //opacity: 0  , scale: 2.5, left: 400, top: 400
    t1.to("#js-slideContainer", 0.5, { yPercent: -400 });
    t1.from(content[3], 0.5, {});
    // opacity: 0, scale: 2.5, right: 400, bottom: 400
    t1.to("#js-slideContainer", 0.5, { yPercent: -500 });
    t1.from(content[3], 0.5, {});
    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper",
      triggerHook: "onLeave",
      duration: "400%",
    })
      .setPin("#js-wrapper")
      .setTween(t1)
      // .addIndicators({
      //   colorTrigger: "White",
      //   colorStart: "black",
      //   colorEnd: "red",
      // })
      .addTo(controller);
  } else {
    t1.to("#js-slideContainer", 0.5, { xPercent: -20 });
    t1.from(content[1], 0.5, {});
    // opacity: 0, scale: 2.5 
    t1.to("#js-slideContainer", 0.5, { xPercent: -40 });
    t1.from(content[2], 0.5, {});
    //opacity: 0  , scale: 2.5, left: 400, top: 400
    t1.to("#js-slideContainer", 0.5, { xPercent: -60 });
    t1.from(content[3], 0.5, {});
    // opacity: 0, scale: 2.5, right: 400, bottom: 400
    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper",
      triggerHook: "onLeave",
      duration: "400%",
    })
      .setPin("#js-wrapper")
      .setTween(t1)
      // .addIndicators({
      //   colorTrigger: "White",
      //   colorStart: "black",
      //   colorEnd: "red",
      // })
      .addTo(controller);
  }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)

