gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".about-content").forEach(card => {
    gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 1,
        zIndex: 0, // Ajoutez cette ligne
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 0%",
            onEnter: () => gsap.to(card, { opacity: 1, y: 0, duration: 1, zIndex: 0 }), // Ajoutez zIndex ici aussi
            onLeave: () => gsap.to(card, { opacity: 0, y: 100, duration: 1, zIndex: 0 }), // Ajoutez zIndex ici aussi
            onEnterBack: () => gsap.to(card, { opacity: 1, y: 0, duration: 1, zIndex: 0 }), // Ajoutez zIndex ici aussi
            onLeaveBack: () => gsap.to(card, { opacity: 0, y: 100, duration: 1, zIndex: 0 }) // Ajoutez zIndex ici aussi
        }
    });
});

document.querySelectorAll(".outils-card, #outils h2, .outils-p, .education-card, #education h2, .education-p, .work-h2, .work-p, .work-card ").forEach(card => {
    gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 1,
        zIndex: 0, // Ajoutez cette ligne
        scrollTrigger: {
            trigger: card,
            start: "top 95%",
            end: "bottom 0%",
            onEnter: () => gsap.to(card, { opacity: 1, y: 0, duration: 1, zIndex: 0 }), // Ajoutez zIndex ici aussi
            onLeave: () => gsap.to(card, { opacity: 0, y: 100, duration: 1, zIndex: 0 }), // Ajoutez zIndex ici aussi
            onEnterBack: () => gsap.to(card, { opacity: 1, y: 0, duration: 1, zIndex: 0 }), // Ajoutez zIndex ici aussi
            onLeaveBack: () => gsap.to(card, { opacity: 0, y: 100, duration: 1, zIndex: 0 }) // Ajoutez zIndex ici aussi
        }
    });
});