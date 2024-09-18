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

    .from(".page1-text-container h1",{
        y: "100%",
        duration:.5,
        stagger:.1,
    }, "-=0.7")
}

loadingPage()

function cursor(){
    window.addEventListener("mousemove", function(e){        
        gsap.to(".cursor",{
            x: e.pageX - 35/2 + "px",
            y: e.pageY - 35/2 + "px",
            duration:0.1
        })
    })
    
}
cursor()

function videoAnimation(){
    document.addEventListener('DOMContentLoaded', () => {
        const image = document.getElementById('toggleImage');
        const video = document.getElementById('video');
    
        const toggleVideo = () => {
            if (video.paused) {
                video.play();
                video.muted = false;
                gsap.to(image,{
                    opacity:0,
                    duration:.3,
                    display: "none",
                })
            } else {
                video.pause();
                video.muted = true;
               gsap.to(image,{
                    opacity:1,
                    duration: .3,
                    display: "block",
    
                })
            }
        };
    
        image.addEventListener('click', toggleVideo);
        video.addEventListener('click', toggleVideo);
    });
    
}

videoAnimation()

function locomotive(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    
}

locomotive()


function magnetEffect(){
    document.addEventListener('DOMContentLoaded', () => {
        const magnets = document.querySelectorAll('.magnet');
        const magnetStrength = 200; 
        magnets.forEach(magnet => {
            magnet.addEventListener('mousemove', (e) => {
                const rect = magnet.getBoundingClientRect();
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                const centerX = rect.left + rect.width / 4;
                const centerY = rect.top + rect.height / 4;
                const deltaX = mouseX - centerX;
                const deltaY = mouseY - centerY;
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                const force = Math.min(magnetStrength / distance, 2);
                magnet.style.transform = `translate(${deltaX * force}px, ${deltaY * force}px)`;
            });
    
            magnet.addEventListener('mouseleave', () => {
                magnet.style.transform = 'translate(0, 0)';
            });
        });
    });
    
}

magnetEffect()


function textAnimation(){
    let textSix = document.querySelector(".page6-heading-text")

textSix.addEventListener("mouseenter", function(){
    let tl = gsap.timeline()

    tl.to(".page6-heading-text h1 span",{
        opacity: 0,
        stagger:.025,
        duration: .16,
        ease:"power2.out",

    })

    tl.to(".page6-heading-text h1 span",{
        fontFamily: "font3",
        webkitTextStroke: "1px #fff",
        stagger:.01,
        color: "transparent"
    },"-=.6" )

    tl.to(".page6-heading-text h1 span",{
        opacity: 1,
        duration:.16,
        ease:"power2.out",
        stagger:.025
    }, "-=.1")






})

textSix.addEventListener("mouseleave", function(){
    tl.to(".page6-heading-text h1 span",{
        opacity: 0,
        stagger:.02,
        duration: .15
    })

    tl.to(".page6-heading-text h1 span",{
        fontFamily: "font1",
        webkitTextStroke: "0px #fff",
        stagger:.01,
        color: "#fff"
    },"-=.6" )

    tl.to(".page6-heading-text h1 span",{
        opacity: 1,
        duration:.15,
        ease:"power3.out",
        stagger:.02
    }, "-=.08")
})
}

textAnimation()
