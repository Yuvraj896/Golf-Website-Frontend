var cur = document.querySelector("#cursor")
var curBlur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    cur.style.left = dets.x -10 +"px"
    cur.style.top = dets.y -10 + "px"
    curBlur.style.left = dets.x -150 + "px"
    curBlur.style.top = dets.y - 150+ "px"

})

gsap.to("#nav",{
    backgroundColor : "#000",
    duration : 0.7,
    height : "100px",
    scrollTrigger : {
        trigger: "#nav",
        scroller: "body",
        start : "top -10%",
        end : "top -11%",
        scrub : 1,

    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger :{
        trigger:"#main",
        scroller: "body",
        start : "top -20%",
        end :"top -70%",
        scrub : 0.5
        
    }
})

var navH4 = document.querySelectorAll("#nav h4")
navH4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cur.style.scale = 2
        cur.style.border = "1px solid #fff"
        cur.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cur.style.scale = 1
        cur.style.border = "0px solid"
        cur.style.backgroundColor = "#95C11E" 
    })
})

gsap.from("#Aboutus",{
    y : 50,
    opacity : 0,
    duration: 1,
    // stragger: 0.2, the display items in sequence 
    scrollTrigger:{
        trigger:"#Aboutus",
        scroller:"body",
        start : "top 70%",
        end: "top 60%",
        scrub: 3,
    }
})  

gsap.from("#colon1", {
    y:-50,
    x:-50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 80%",
        end: "top 70%",
        scrub: 1,
        
    }
})
gsap.from("#colon2", {
    y: 50,
    x: 50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 80%",
        end: "top 70%",
        scrub: 1,
        
    }
})

gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 80%",
        end: "top 70%",
        scrub: 1.3,
        }
    })