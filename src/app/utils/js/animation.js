
window.addEventListener('scroll', () => {
    const el1 = document.querySelector('.animate-1');
    const el2 = document.querySelector('.animate-2');
    const el3 = document.querySelector('.animate-3');
    const parallaxEls = document.querySelectorAll("[data-speed]");
    let banner = document.querySelector('.banner');
    // let smartMove = document.querySelector('.parallex-para');
    // let smMoveHeader = document.querySelector('.heading.h--margin-0.text-capitalize');
    if (banner && banner.getBoundingClientRect().bottom > 10) {
        handleBannerParallex(parallaxEls);
    }
    if (el1 || el2 || el3) {
        animate(el1, el2, el3);
    }
    // if (isInViewPort(smMoveHeader)) {
    //     let obj = [smartMove];
    //     handleBannerParallex(obj)
    // }
    // console.log('The smartMove values are', smartMove ? smartMove.getBoundingClientRect() : null);
})


function animate(el1, el2, el3, ) {
    if (isInViewPort(el1)) {
        el1.classList.add('animate-thumb');
    }
    if (isInViewPort(el2)) {
        el2.classList.add('animate-stack');
    }
    if (isInViewPort(el3)) {
        el3.classList.add('animate-stack');
    }
}

function handleBannerParallex(parallaxEls) {
    for (const parallaxEl of parallaxEls) {
        const direction = parallaxEl.dataset.direction == "up" || parallaxEl.dataset.direction == "left" ? "-" : "";
        const transformY = this.pageYOffset * parallaxEl.dataset.speed;
        if (parallaxEl.classList.contains("banner-title")) {
            parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px, 0)`;
        } else if (parallaxEl.classList.contains("banner-subtitle")) {
            parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
        }
        // else if (parallaxEl.classList.contains('parallex-para')) {
        //     parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
        // }
        else {
            parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
        }
    }
}

function isInViewPort(elem) {
    if (elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }
};