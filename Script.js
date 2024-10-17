var crsr=document.querySelector("#cursor");
var blur=document.querySelector("#cursorblur");
document.addEventListener("mousemove",function(dets){
 crsr.style.left=dets.x-20+"px";
 crsr.style.top=dets.y+"px";
 blur.style.left=dets.x-80+"px";
 blur.style.top=dets.y-80+"px";
} 
);

gsap.to("#nav",{
    backgroundColor :"#000",
    duration:0.5,
    height:"140px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
       start:"top -10%",
       end:"top -11%",
       scrub:1,/* used for smooth transition ekdam se color change nahi hoga*/
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:true,



    }
})


var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
    })
})


gsap.from("#aboutus img,#aboutusin",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        start:"top 70%",
        end: "top 60%",
        scrub:3,


    }


})



gsap.from(".card", {
    scale: 0.8,
    opacity:0,
    duration: 1,
    Stagger:0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    }
  })


  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
