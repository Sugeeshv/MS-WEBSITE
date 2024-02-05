// Throttle function to limit the rate at which a function is called
function throttle(callback, delay) {
    let lastCall = 0;
    return function () {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            callback.apply(null, arguments);
        }
    };
}

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.floating-banner');
    const banner = document.querySelector('.floating-banner');
    const throttledScrollHandler = throttle(handleScroll, 100); // Adjust the delay
    let lastScrollPosition = window.pageYOffset;

    // Intersection Observer for animating on scroll
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Add your animation class
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    sections.forEach(section => {
        observer.observe(section);
    });

    window.addEventListener('scroll', throttledScrollHandler);

    function handleScroll() {
        let scrollPosition = window.pageYOffset;

        // Detect scroll direction
        const scrollDirection = scrollPosition > lastScrollPosition ? 'down' : 'up';
        lastScrollPosition = scrollPosition;

        sections.forEach(function (section, index) {
            // Parallax effect for rotation
            let rotation = scrollPosition * 0.1;
            section.style.transform = `rotate(${rotation}deg)`;

            // Parallax effect for fluctuating size with transition and scaling
            let scale = 1 + scrollPosition * 0.001; // Adjust the scaling factor
            let newSize = 6 + scrollPosition * 0.01; // Adjust the parallax speed
            section.style.width = `${newSize * scale}%`;
        });

        // Adjust banner position based on scroll direction and scroll position
        if (scrollDirection === 'down') {
            banner.classList.add('visible'); // Add your desired class name
            banner.style.bottom = `${scrollPosition}px`; // Adjust this line for custom positioning
        } else {
            banner.classList.remove('visible');
            banner.style.top = ''; // Reset the top position
        }

        // Adjust this threshold as needed to control when the banner starts moving
        if (scrollPosition > 100 && scrollPosition < document.documentElement.scrollHeight - window.innerHeight) {
            banner.classList.add('float-to-bottom');
        } else {
            banner.classList.remove('float-to-bottom');
        }
    }
});
