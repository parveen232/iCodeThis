const left = document.querySelector('.left');
const items = document.querySelectorAll('.items li');
const imgContainer = document.querySelectorAll('.product-image');
const deleteBtns = document.querySelectorAll('.delete-btn');
const priceList = document.querySelectorAll('.price');
const sliderDots = document.querySelector('.slider-dots');
const sliderBtns = document.querySelectorAll('.slider-btn');
const removeTotal = document.querySelector('.total-price-container');
const totalP = document.querySelector('.total-price');
const right = document.querySelector('.right');
const cardHolder = document.querySelector('#card-holder');
const payForm = document.querySelector('.pay');
const txtCardNum = document.querySelector('#txt-cardNumber');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const txtCVC = document.querySelector('#txt-cvc');
const orderBtn = document.querySelector('.order-btn');


let itemsLen = items.length;
let totalPrice = 0;

total();

function total() {
    for (const price of priceList) {
        totalPrice += parseFloat(price.innerHTML.replace("$", "0"));
    }
    totalP.innerHTML = `$${totalPrice.toFixed(2)}`;
}

for (const [index, deleteBtn] of deleteBtns.entries()) {
    deleteBtn.addEventListener('click', () => {
        itemsLen -= 1;

        sliderBtns[index].parentElement.remove();

        if (index == 0 || index == 1) {
            sliderBtns[2].style.backgroundColor = `red`;
        }
        else {
            sliderBtns[1].style.backgroundColor = `red`;
        }

        deleteBtn.parentElement.style.animation = `hide 0.4s ease-in-out`;

        totalPrice -= parseFloat(priceList[index].innerHTML.replace("$", "0"));

        setTimeout(() => {
            deleteBtn.parentElement.remove();
            totalP.innerHTML = `$${totalPrice.toFixed(2)}`;
        }, 400)

        if (itemsLen == 1) {
            sliderDots.remove();
        }

        if (itemsLen == 0) {
            right.remove();
            removeTotal.remove();
            left.style.width = `100%`;
            left.style.transition = `width 0.4s ease-in-out`;
        }
    })
}

for (const [index, sliderBtn] of sliderBtns.entries()) {
    sliderBtn.addEventListener('click', () => {
        for (let i = 0; i < sliderBtns.length; i++) {
            if (i == index) {
                items[i].style.zIndex = `100`;
                sliderBtns[i].style.backgroundColor = `red`;
            }
            else {
                items[i].style.zIndex = `0`;
                sliderBtns[i].style.backgroundColor = `#fff`;
            }
        }
    })
}

for (const [index, img] of imgContainer.entries()) {
    if (index == 0) {
        img.style.backgroundImage = `url('https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600')`;
    }
    if (index == 1) {
        img.style.backgroundImage = `url('https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600')`;
    }
    if (index == 2) {
        img.style.backgroundImage = `url('https://jayshetty.me/wp-content/uploads/2020/01/book-1.png')`;
    }
}

for (let i = 1; i <= 12; i++) {
    const option = document.createElement('option');
    option.value = `${i}`;
    if (i < 10) {
        option.innerText = `0${i}`;
    }
    else {
        option.innerText = `${i}`;
    }
    month.appendChild(option);
}

for (let i = 2023; i <= 2030; i++) {
    const option = document.createElement('option');
    option.value = `${i}`;
    option.innerText = `${i}`;
    year.appendChild(option);
}

txtCVC.addEventListener('keyup', (e) => {
    e.preventDefault();
    let cvcNumVal = txtCVC.value;
    let cvcLength = cvcNumVal.length;

    if (!(/[0-9]/.test(e.key) || e.key == 'Backspace' || e.key == 'Enter' || e.key == 'Tab')) {
        txtCVC.value = cvcNumVal.slice(0, cvcLength - 1);
    }

    if (cvcLength > 3) {
        txtCVC.value = cvcNumVal.slice(0, 3);
    }
})

txtCardNum.addEventListener('keyup', (e) => {
    e.preventDefault();
    let cardNumVal = txtCardNum.value;
    let numLength = cardNumVal.length;

    if (!(/[0-9]/.test(e.key) || e.key == 'Backspace' || e.key == 'Enter' || e.key == 'Tab')) {
        txtCardNum.value = cardNumVal.slice(0, numLength - 1);
    }

    if (/[0-9]/.test(e.key) && (numLength == 4 || numLength == 9 || numLength == 14)) {
        txtCardNum.value = cardNumVal + ' ';
    }

    if ((numLength == 4 || numLength == 9 || numLength == 14) && e.code == "Backspace") {
        txtCardNum.value = cardNumVal.slice(0, numLength - 1);
    }

    // if (numLength == 19 && e.key == 'Enter') {
    //     month.focus();
    // }

    if (numLength > 19) {
        txtCardNum.value = cardNumVal.slice(0, 19);
    }
})

// cardHolder.addEventListener('keyup', (e) => {
//     e.preventDefault();
//     if (e.key == 'Enter') {
//         txtCardNum.focus();
//     }
// })

payForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isCardNumValid(txtCardNum.value) && isCardCVCValid(txtCVC.value) && cardHolder.value.length > 0) {
        document.body.innerHTML = `<div style="text-align:center">
                                    <h1>Congratulations!</h1>           
                                    <h2>Order Placed</h2>
                                    </div>`;
    }

    else {
        alert('Invalid Card Info');
    }
})

function isCardNumValid(cardNum) {
    let status = "invalid";
    for (let i = 0; i < 19; i++) {
        if (i == 4 || i == 9 || i == 14) {
            if (cardNum[i] == " ") {
                status = "valid";
            }
            else {
                return false;
            }
        }
        else {
            if (/[0-9]/.test(cardNum[i])) {
                status = "valid";
            }
            else {
                return false;
            }
        }
    }
    if (status == "valid") return true;
}

function isCardCVCValid(cardCVC) {
    let status = "invalid";
    for (let i = 0; i < 3; i++) {
        if (/[0-9]/.test(cardCVC[i])) {
            status = "valid";
        }
        else {
            return false;
        }
    }
    if (status == "valid") return true;
}