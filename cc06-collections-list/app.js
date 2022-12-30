const pcContainer = document.querySelector('.pc-container');
const secondaryImgContainers = document.querySelectorAll('.secondary-img-container');
const topics = document.querySelectorAll('.topic');
const viewAllColl = document.querySelectorAll('.view-all');

const allImages = document.querySelector('.all-images');
const homeBtn = document.querySelector('.home-btn');
const list = document.querySelector('.list');
const popup = document.querySelector('.popup');
const popupImg = popup.querySelector('img');
const popupClose = popup.querySelector('.close-btn');

for (const topic of topics) {
    const topicName = topic.parentNode.parentNode.className.slice(0, -8);
    topic.innerHTML = `${formatTopicName(topicName)}`;
}

function formatTopicName(name) {
    return name
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}

for (const secondaryImgContainer of secondaryImgContainers) {
    const type = secondaryImgContainer.parentNode.className.slice(0, -8);
    for (let i = 0; i < 4; i++) {
        if (i == 0) {
            const fic = secondaryImgContainer.parentNode.querySelector('.first-img-container');

            fic.innerHTML =
                `<img src="https://source.unsplash.com/random/1000x1000/?${type}&${i}">`;
        }
        else {
            const divEl = document.createElement('div');
            divEl.classList.add('si-container');

            divEl.innerHTML =
                `<img src="https://source.unsplash.com/random/1000x1000/?${type}&${i}">`;

            secondaryImgContainer.appendChild(divEl);
        }
    }
}

for (let viewAll of viewAllColl) {
    viewAll.addEventListener('click', () => {
        document.body.style.backgroundColor = `#fff`;

        const collLen = viewAll.querySelector('.coll-len').innerText;

        pcContainer.style.display = `none`;
        allImages.style.display = `block`;

        const imgType = viewAll.parentNode.parentNode.className.slice(0, -8);

        list.innerHTML = ` `;

        for (let i = 0; i < collLen; i++) {
            const liEl = document.createElement('li');
            liEl.classList.add('item');

            liEl.innerHTML =
                `<img src="https://source.unsplash.com/random/1000x1000/?${imgType}&${i}">
                 <div class="item-overlay">
                    <button class="view-btn"><ion-icon name="eye-outline"></ion-icon></button>
                 </div>
                `;

            list.appendChild(liEl);
        }

        const viewBtns = document.querySelectorAll('.view-btn');

        for (let viewBtn of viewBtns) {
            viewBtn.addEventListener('click', (e) => {
                const src = e.currentTarget.parentNode.parentNode.querySelector('img').src;
                popupImg.src = src;
                popup.classList.add('open');
            });
        }

        popupClose.addEventListener('click', () => {
            popup.classList.remove('open');
        });
    })
}

homeBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = `#d8dae2`;
    pcContainer.style.display = `block`;
    allImages.style.display = `none`;
})