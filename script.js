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

gsap.from(".page1 .hlo span",{
    y:"100%",
    duration:1,
})

gsap.to(".nav",{
    y:-50,
    scrollTrigger:{
        trigger:".nav",
        scroller:".main",
        scrub:2,
        markers:true,
        start:"top -20%",
        end:"top -50%"
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