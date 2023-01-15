const projects = [
	{
		name: 'cc04-my-cart',
		languages: ['html', 'css', 'js'],
		github: 'https://github.com/parveen232/iCodeThis/tree/main/cc04-my-cart'
	},
	{
		name: 'cc06-collections-list',
		languages: ['html', 'css', 'js'],
		github: 'https://github.com/parveen232/iCodeThis/tree/main/cc06-collections-list'
	},
	{
		name: 'cc03-product-info',
		languages: ['html', 'css', 'js'],
		github: 'https://github.com/parveen232/iCodeThis/tree/main/cc03-product-info'
	},
	{
		name: 'cc05-mobile-menu',
		languages: ['html', 'css', 'js'],
		github: 'https://github.com/parveen232/iCodeThis/tree/main/cc05-mobile-menu'
	},
	{
		name: 'cc02-select-plan',
		languages: ['html', 'css', 'js'],
		github: 'https://github.com/parveen232/iCodeThis/tree/main/cc02-select-plan'
	},
	{
		name: 'cc01-users-list',
		languages: ['html', 'css'],
		github: 'https://github.com/parveen232/iCodeThis/tree/main/cc01-users-list'
	}
];

const list = document.querySelector('.list');

projects.forEach(({name, languages, github }) => {
    const listItem = document.createElement('li');
	listItem.classList.add('item');
    
    listItem.innerHTML = `
                <div class="img-container">
                    <a href="/${name}/index.html">
                        <img src="/${name}/img/ss-desktop.png" alt="${name}" />
                    </a>
                </div>
                <div class="project-name">
                    <a href="/${name}/index.html">
                        ${modifyName(name)}
                    </a>
				</div>
                <div class="languages">
                    ${addLang(languages)}
                </div>
                <div class="links">
                    <a href="${github}">
                        <ion-icon name="logo-github"></ion-icon>
                        GitHub
                    </a>
                    <a href="/${name}/index.html">
                        <ion-icon name="open-outline"></ion-icon>
                        Live Demo
                    </a>
                </div>
            `;

    list.appendChild(listItem);
});


function modifyName(name) {
	return name
		.slice(5)
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}

function addLang(langArr) {
    const spanColl = document.createElement('div');
    
    for (const lang of langArr) {
        const spanEl = document.createElement('span');

        if (lang == 'html') {
            spanEl.classList.add('html-clr');
        }
        if (lang == 'css') {
            spanEl.classList.add('css-clr');
        }
        if (lang == 'js') {
            spanEl.classList.add('js-clr');
        }

        spanEl.innerHTML = lang.toUpperCase();
        spanColl.appendChild(spanEl);
    }
    const result = spanColl.innerHTML;
    spanColl.remove();
    return result;
}


