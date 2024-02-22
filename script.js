function loco() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco()

//=============ANIMATIONS==================

var tloader = gsap.timeline({
  scrollTrigger:{
    scroller:".main",
    trigger:".loader-in",
    delay:2,
    duration:2
  }
  
})
tloader.from(".l1",{
  display:"initial",
})
tloader.to(".l2",{
  display:"initial",
})
tloader.to(".l3",{
  display:"initial",
})
tloader.to(".l4",{
  display:"initial",
})
tloader.to(".l5",{
  display:"initial",
})
tloader.to(".l6",{
  display:"initial",
})
tloader.to(".l7",{
  display:"initial",
})
tloader.to(".l8",{
  display:"initial",
})




var tl = gsap.timeline({
  scrollTrigger:{
    scroller:'.main',
    trigger:'.page1',
    start:'10% top',
    scrub:2,
    //markers:true,
    end:'top -2%',
  }
})
tl.to('.nav',{
  y:-200,
  duration:5,
  delay:1
})
gsap.to(".loader",{
  y:"-100%",
  delay:2,
  duration:1
})


gsap.from("#h", {
  duration: 1,
  y:1000,
  delay:2,
  stagger: 0.1
});

gsap.from("#p3-l",{
  duration:1,
  y:200,
  stagger:0.1,
  scrollTrigger:{
    scroller:".main",
    trigger:"#p3-l",
  }
})


gsap.from(".page2 video",{
    width:"40%",
    height:"40%",
    scrollTrigger:{
        trigger:".page2 video",
        scroller:".main",
        scrub:2,
        //markers:true,
        start:"top 100%",
        end:"top 0%"
    }
})


gsap.to(".page5-content1 .p5-slid",{
  transform:"translateX(-130%)",
  scrollTrigger:
  {   
      trigger:".page5-content1 .p5-slid h1",
      scroller:".main",
      scrub:2,
      markers:true,
      start:"top -10%",
      end:"top -150%",
      pin:true,
      duration:3
  }
})

gsap.to(".p5-slid img",{
  x:-100,
  transform:"translateX(-130%)",
  scrollTrigger:
  {   
      trigger:".p5-slid img",
      scroller:".main",
      scrub:2,
      markers:true,
      start:"top -10%",
      end:"top -150%",
      pin:true,
      duration:2
  }
})
