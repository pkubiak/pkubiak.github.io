function slugify(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/[-]+/g, '-');
}

function build_card(item) {
    let el = document.createElement('div'); el.className = 'col';
    let links = [];
    for(let k in item.urls)
        links.push(`<a href="${item.urls[k]}" class="card-link">${k}</a>`)

    let img_url = item.img || ("https://picsum.photos/300/150?random="+Math.random());
    el.innerHTML = `
        <div class="col">
            <div class="card">
                <div class="card-img-top ratio ratio-16x9 bg-secondary" style="background-image: url(${img_url})"></div>
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.desc || ''}</p>
                    ${links.join("\n")}
                </div>
            </div>
        </div>
    `;
    return el;
}

function build_section(section) {
    let wrapper = document.createElement('div');

    let slug = slugify(section.name);
    wrapper.innerHTML += `<h2 id="${slug}" class="mt-5">${section.name}</h2>`;
    wrapper.innerHTML += `<p class="lead mt-3 mb-4">${section.desc}</p>`;
    let cards = document.createElement('div');
    cards.className = 'row row-cols-1 row-cols-sm-2 row-cols-md-3  g-4';
    for(let item of section.items)
        cards.appendChild(build_card(item));
    wrapper.appendChild(cards);
    return wrapper;
}

const main = document.querySelector('main'), nav = document.querySelector('#nav');

for(let section of SECTIONS) {
    main.appendChild(build_section(section));
    nav.innerHTML += `
        <li class="nav-item">
            <a class="nav-link" href="#${slugify(section.name)}">${section.name}</a>
        </li>
    `;
}
