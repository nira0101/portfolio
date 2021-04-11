"use strict"

const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(min-width:1000px)": function(){
        gsap.from(".fa-html5", {
            opacity: 0,
            delay: 2,
            ease: "linear",
            scrollTrigger: {
              trigger: "#introduction",
              scrub: 1,
              start: "top ",
              end: "bottom 70%  ",
            },
          });
          gsap.from(".fa-css3-alt", {
            opacity: 0,
            delay: 2,
            ease: "linear",
            scrollTrigger: {
              trigger: "#introduction",
              scrub: 1,
              start: "top ",
              end: "bottom 70%  ",
            },
          });
          gsap.from(".fa-js-square", {
            opacity: 0,
            delay: 2,
            ease: "linear",
            scrollTrigger: {
              trigger: "#introduction",
              scrub: 1,
              start: "top ",
              end: "bottom 70%  ",
            },
          });
          gsap.from(".ps", {
            opacity: 0,
            y:"20vw",
            delay: 2,
            ease: "ease-in",
            scrollTrigger: {
              trigger: "#introduction",
              scrub: 1,
              start: "top ",
              end: "bottom 70%  ",
            },
          });
          gsap.from(".ai", {
            opacity: 0,
            y:"20vw",
            delay: 2,
            ease: "ease-in",
            scrollTrigger: {
              trigger: "#introduction",
              scrub: 1,
              start: "top ",
              end: "bottom 70%  ",
            },
          });
          gsap.from(".xd", {
            opacity: 0,
            y:"20vw",
            delay: 2,
            ease: "ease-in",
            scrollTrigger: {
              trigger: "#introduction",
              scrub: 1,
              start: "top ",
              end: "bottom 70%  ",
            },
          });
        
          gsap.from("#skills h1", {
            opacity: 0,
            y:"-10vw",
            delay: 2,
            ease: "ease-in",
            scrollTrigger: {
              trigger: "#introduction",
              scrub: 1,
              start: "top ",
              end: "bottom 70%  ",
            },
          });
        
          gsap.from(".connect", {
            opacity: 0,
            delay: 2,
            ease: "ease-in",
            scrollTrigger: {
              trigger: "#skills",
              scrub: 1,
              start: "top  ",
              end: "bottom 70%  ",
            },
          });
        
          gsap.from(".contact", {
            opacity: 0,
            y:"20vw",
            delay: 2,
            ease: "ease-in",
            scrollTrigger: {
              trigger: "#skills",
              scrub: 1,
              start: "top  ",
              end: "bottom 70%  ",
            },
          });

    }
})
