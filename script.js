function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}
navAnimation()

 function mobileviewButton(){
    document.querySelector(".menu-icon").addEventListener("click", function () {
        document.querySelector(".nav-part2").classList.toggle("show");
      });
 } 
 mobileviewButton()

function page2Animation(){
    var rightElems=document.querySelectorAll(".right-elem")
rightElems.forEach(function(elem) {
    elem.addEventListener("mouseenter",function(){
       gsap.to(elem.childNodes[3],{
        opacity :1,
        scale:1
       })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
        opacity :0,
        scale:0
       })
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
         x:dets.x-elem.getBoundingClientRect().x-70,
         y:dets.y-elem.getBoundingClientRect().y-170,
       })
    })
});
}
page2Animation()

function page3videoAnimation(){
var page3Center = document.querySelector(".page3-center")
var video = document.querySelector("video")

page3Center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})

video.addEventListener("click",function(){
    video.pause()
     gsap.to(video,{
        transform:"scaleX(.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })
    
})
}
page3videoAnimation()

function page4Animation() {
var sections=document.querySelectorAll(".sec-right")
sections.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
      elem.childNodes[3].style.opacity=1
      elem.childNodes[3].play()
   })
   elem.addEventListener("mouseleave",function(){
      elem.childNodes[3].style.opacity=0
      elem.childNodes[3].load()
   })
})
}
page4Animation()

function loadingAnimation(){
var tl=gsap.timeline()
tl.from("#page1",{
    transform: "scaleX(0.7) scaleY(0)",
    duration:2 
})
}
loadingAnimation()

function page6Animation(){
    const video=document.querySelectorAll(".video-container video");
    video.forEach(function(dets){
       dets.addEventListener("mouseenter", () => {
           dets.play()
       });
       dets.addEventListener("mouseleave", () => {
           dets.pause()
       });
       
    })
   
   const video2=document.querySelectorAll(".video-container2 video");
    video2.forEach(function(dets){
       dets.addEventListener("mouseenter", () => {
           dets.play()
       });
       dets.addEventListener("mouseleave", () => {
           dets.pause()
       });
       
    })
}
page6Animation()



