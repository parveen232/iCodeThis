const menuBar = document.querySelector('.menu');
const listLis = document.querySelectorAll('.nav-list li');
const ionicons = document.querySelectorAll('.nav-list ion-icon');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', () => {
    menuBar.classList.remove('close');
})

closeBtn.addEventListener('click', () => {
    menuBar.classList.add('close');
})

for (const [index, listLi] of listLis.entries()) {
    let ionicon = listLi.querySelector('ion-icon');
    let curAtt = ionicon.getAttribute('name');

    listLi.addEventListener('click', () => {
        listLi.classList.add('active');
        if(curAtt == 'flash') {
            ionicon.setAttribute('name', 'flash');
        }
        else {
            ionicon.setAttribute('name', curAtt.slice(0, -8));
        }
        inactive(index);
    })

    listLi.addEventListener('mouseover', () => {
        listLi.classList.add('hover');
    })

    listLi.addEventListener('mouseleave', () => {
        listLi.classList.remove('hover');
    })
}

function inactive(index) {
    for (let i = 0; i < 5; i++) {
        let ionicon = listLis[i].querySelector('ion-icon');
        let Att = ionicon.getAttribute('name');
        if (i != index) {
            listLis[i].classList.remove('active');
            if (!Att.includes("-outline")) {
                ionicons[i].setAttribute('name', Att + "-outline");
            }
        }
    }
}