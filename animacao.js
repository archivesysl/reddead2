window.addEventListener("scroll", function() {
    const images = document.querySelectorAll('.image-container img');
    images.forEach(image => {
        if (image.getBoundingClientRect().top < window.innerHeight) {
            image.classList.add('fadeIn');
        }
    });
});
