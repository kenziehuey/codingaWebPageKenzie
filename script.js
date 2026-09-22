document.querySelector('a[href="#typography"]').addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector('#typography');
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY;
    const duration = 1500;
    const startTime = performance.now();

    function scrollAnimation(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, start + (end - start) * progress);

        if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    requestAnimationFrame(scrollAnimation);
});

const sections = document.querySelectorAll(".typography, .color, section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});