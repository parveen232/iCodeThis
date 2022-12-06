const cartBtns = document.querySelectorAll('.cart-btn');
const wishlistBtn = document.querySelector('.wishlist-btn');
const atcBtn = document.querySelector('.atc');
const atwlBtn = document.querySelector('.atwl');
const overlay = document.querySelector('.overlay');

for (const btn of cartBtns) {
    btn.addEventListener('click', () => {
        overlay.style.visibility = 'visible';
        atcBtn.style.visibility = 'visible';
        setTimeout(() => {
            overlay.style.visibility = 'hidden';
            atcBtn.style.visibility = 'hidden';
        }, 1000)
    })
}

wishlistBtn.addEventListener('click', () => {
    overlay.style.visibility = 'visible';
    atwlBtn.style.visibility = 'visible';
    setTimeout(() => {
        overlay.style.visibility = 'hidden';
        atwlBtn.style.visibility = 'hidden';
    }, 1000)
})
