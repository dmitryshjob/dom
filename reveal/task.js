function viewOnScroll() {

    const reveal = Array.from(document.querySelectorAll('.reveal'));

    let isInViewport = function(elem) {
        const viewport = window.innerHeight;
        const elemTop = elem.getBoundingClientRect().top;
        return elemTop < viewport ? true : false;
    };

    for (let i = 0; i < reveal.length; i++) {
        const div = reveal[i];

        if (isInViewport(div) & div.getBoundingClientRect().top > 0) {
            div.classList.add('reveal_active');
        } else {
            div.classList.remove('reveal_active');
        }
    }
}
document.addEventListener('scroll', viewOnScroll);








