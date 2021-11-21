let lastPosition = 0;

window.addEventListener('scroll', () => {
    let currentPosition = window.pageYOffset;

    if (lastPosition - currentPosition < 0) {
        document.body.classList.add('scroll-down')
        document.body.classList.remove('scroll-up')
    }

    if (lastPosition - currentPosition > 0) {
        document.body.classList.add('scroll-up')
        document.body.classList.remove('scroll-down')
    }
    lastPosition = currentPosition;
})