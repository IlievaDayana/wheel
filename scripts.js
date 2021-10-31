document.querySelector('.spin').addEventListener('click', () => {
    let wheel = document.querySelector('.wheel');
    wheel.classList.add("rotation")
    setTimeout(frame(), 5000);

})



var colors = ["#8b5642", "#6a696b"];

function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
    });

    if (Date.now() < Date.now() + 15000) {
        requestAnimationFrame(frame);
    }
}