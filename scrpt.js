let tl = gsap.timeline()
let count = document.querySelector(".counter")
let number = 0


function loadingPage(){
    let counter = setInterval(function(){
        if(number === 100){}
        else{
            number++
            count.textContent = number
        }
    }, 26)
    
    tl.from(".counter-container",{
        opacity: 0,
        duration:.6,
        ease: "power3.in",
    
    })
    
    tl.from(".text-container h1",{
        y: "110%",
        duration: .6,
        delay:-.2,
        stagger: .2
    })
    
    .from(".text-content-bottom p",{
        opacity: 0,
    }, "-=0.5")
    
    .to(".border", {
        opacity: 0,
        duration: 0.001,
        ease: "none",
    })
    .to(".border", {
        fontFamily: "font3",
        webkitTextStroke: "1px #fff",
        color: "transparent",
        fontWeight: 100,
        duration: 0.001,
        ease: "none"
    })
    
    .to(".border", {
        opacity: 1,
        duration: .6,
        ease: "none"
    })
    
    .to(".border", {
        opacity: 0,
        duration: 0.001,
        ease: "none"
    })
    
    .to(".border", {
        fontFamily: "font1",
        color:"#fff",
        fontWeight: 900,
        duration: 0.001,
        ease: "none"
    })
    
    .to(".border", {
        opacity: 1,
        duration: .6,
        ease: "none"
    })
    
    .to(".border", {
        opacity: 0,
        duration: 0.001,
        ease: "none"
    })
    
    .to(".border", {
        fontFamily: "font3",
        webkitTextStroke: "1px #fff",
        color: "transparent",
        fontWeight: 100,
        duration: 0.001,
        ease: "none"
    })
    
    .to(".border", {
        opacity: 1,
        duration: .6,
        ease: "none"
    })
    
    .to(".text-container h1",{
        opacity:0,
        stagger: 0.1,
        duration:.8,
    })
    
    .to(".counter-container, .text-content-bottom",{
        opacity:0,
        stagger: 0.1,
        duration:.8,
    }, "-=0.6")
    
    .to(".loader",{
        y:"-100%",
        ease: "power4.out",
        duration:1,
    })
}

loadingPage()

window.addEventListener("mousemove", function(e){
    console.log(e);
    
    gsap.to(".cursor",{
        x: e.pageX - 35/2 + "px",
        y: e.pageY - 35/2 + "px",
        duration:0.1
    })
})
