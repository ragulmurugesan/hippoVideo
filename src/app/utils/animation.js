
window.addEventListener('scroll', () => {
    var el1 = document.querySelector('.animate-1');
    var el2 = document.querySelector('.animate-2');
    var el3 = document.querySelector('.animate-3');
    if (isInViewPort(el1)) {
        el1.classList.add('animate-thumb');
    }
    if (isInViewPort(el2)) {
        el2.classList.add('animate-stack');
    }
    if (isInViewPort(el3)) {
        el3.classList.add('animate-stack');
    }
})

function isInViewPort(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
};