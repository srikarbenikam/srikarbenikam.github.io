window.onload = function() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".link", {
        duration: 0.4,
        y: 100,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".link2", {
        duration: 0.5,
        y: 99,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".link3", {
        duration: 0.7,
        y: 110,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".link4", {
        duration: 0.9,
        y: 190,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".link5", {
        duration: 1,
        y: 200,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".header-1", {
        duration: 1.5,
        y: 20,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".header-2", {
        duration: 1.5,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".wrap",{
        scrollTrigger: {
            trigger:".wrap",
            toggleActions:"restart pause resume pause"
        },
        x:-150,
        opacity:0,
        duration:0.2
    })
    gsap.from(".wrap1",{
        scrollTrigger: {
            trigger:".wrap1",
            toggleActions:"restart pause resume pause"
        },
        x:-200,
        opacity:0,
        duration:0.5
    })
    gsap.from(".wrap2",{
        scrollTrigger: {
            trigger:".wrap2",
            toggleActions:"restart pause resume pause"
        },
        x:-300,
        opacity:0,
        duration:0.8
    })
    gsap.from(".wrap3",{
        scrollTrigger: {
            trigger:".wrap3",
            toggleActions:"restart pause resume pause"
        },
        x:-400,
        opacity:0,
        duration:1
    })
    gsap.from(".accordion-item",{
        scrollTrigger: {
            trigger:".accordion-item",
            toggleActions:"restart pause resume pause"
        },
        x:100,
        opacity:0,
        duration:1
    })
    gsap.from(".vision-wrapper",{
        scrollTrigger: {
            trigger:".vision-wrapper",
            toggleActions:"restart pause resume pause"
        },
        opacity:0,
        duration:1
    })
    gsap.from(".vmheader h1",{
        scrollTrigger: {
            trigger:".vmheader h1",
            toggleActions:"restart pause resume pause"
        },
        y:100,
        opacity:0,
        duration:1.5
    })
    gsap.from(".header3 h1",{
        scrollTrigger: {
            trigger:".header3 h1",
            toggleActions:"restart pause resume pause"
        },
        y:100,
        opacity:0,
        duration:0.5
    })
    gsap.from(".vision-header",{
        scrollTrigger: {
            trigger:".vision-header",
            toggleActions:"restart pause resume pause"
        },
        x:100,
        opacity:0,
        duration:1
    })
    gsap.from(".header h1",{
        scrollTrigger: {
            trigger:".header h1",
            toggleActions:"restart pause resume pause"
        },
        y:100,
        opacity:0,
        duration:1
    })
    gsap.from(".vision-content",{
        scrollTrigger: {
            trigger:".vision-content",
            toggleActions:"restart pause resume pause"
        },
        x:-100,
        opacity:0,
        duration:1
    })
    gsap.from(".mission-header",{
        scrollTrigger: {
            trigger:".mission-header",
            toggleActions:"restart pause resume pause"
        },
        x:-100,
        opacity:0,
        duration:1
    })
    gsap.from(".mission-content",{
        scrollTrigger: {
            trigger:".mission-content",
            toggleActions:"restart pause resume pause"
        },
        x:100,
        opacity:0,
        duration:1
    })
    gsap.from(".con0 h1",{
        scrollTrigger: {
            trigger:".con0 h1",
            toggleActions:"restart pause resume pause"
        },
        y:-100,
        opacity:0,
        duration:1
    })
    gsap.from(".con0 p",{
        scrollTrigger: {
            trigger:".con0 p",
            toggleActions:"restart pause resume pause"
        },
        y:100,
        opacity:0,
        duration:1
    })
    gsap.from(".img-container",{
        scrollTrigger: {
            trigger:".img-container",
            toggleActions:"restart pause resume pause"
        },
        scale:0,
        opacity:0,
        duration:1
    })
    gsap.from(".con2 p",{
        scrollTrigger: {
            trigger:".con2 p",
            toggleActions:"restart pause resume pause"
        },
        x:100,
        opacity:0,
        duration:1
    })
    gsap.from("#about",{
        scrollTrigger: {
            trigger:"#about",
            toggleActions:"restart pause resume pause"
        },
        x:-100,
        opacity:0,
        duration:1
    })
}