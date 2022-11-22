function slugify(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/[-]+/g, '-');
}

function build_card(item) {
    let el = document.createElement('div'); el.className = 'col';
    const links = Object.entries(item.urls || {}).map(link => `<li class="list-inline-item"><a href="${link[1]}" class="card-link" target="_blank">${link[0]}</a></li>`)
    const links_ul = links ? `<ul class="list-inline mb-0">${links.join("\n")}</ul>` : '';
    const img = (typeof(item.img) === "string") ? {url: item.img} : (item.img || {});

    let img_url = img.url || ("https://picsum.photos/300/150?random="+Math.random());
    let position = img.position || 'center center';
    let desc = item.desc || '';

    if(item.badges) {
        let badges = item.badges.map(badge => `<span class='badge bg-primary rounded-pill'>${badge}</span>`);
        desc = badges.join(" ") + " " + desc;
    }

    el.innerHTML = `
        <article class="card">
            <div class="card-img-top ratio ratio-16x9 bg-secondary" style="background: url(${img_url}) ${position} / cover"></div>
            <div class="card-body">
                <h3 class="card-title h5">${item.title}</h5>
                <p class="card-text">${desc}</p>
                ${links_ul}
            </div>
        </article>
    `;

    if(typeof(item.details) === "string") {
        const tooltip = document.createElement('span');
        tooltip.className = 'btn-tooltip';
        tooltip.tabIndex = 0;
        el.querySelector('h3').appendChild(tooltip);

        new bootstrap.Tooltip(
            el.querySelector('span'),
            {
                title: item.details,
                html: true
            }
        )
    }
    return el;
}

function build_section(section) {
    let wrapper = document.createElement('section');

    let slug = slugify(section.name);
    wrapper.innerHTML += `<h2 id="${slug}" class="mt-5 mb-3">${section.name}</h2>`;
    if(section.desc)
        wrapper.innerHTML += `<p class="lead mt-3 mb-4">${section.desc}</p>`;
    let cards = document.createElement('div');
    cards.className = 'row row-cols-1 row-cols-sm-2 row-cols-md-3  g-4';
    for(let item of section.items)
        cards.appendChild(build_card(item));
    wrapper.appendChild(cards);
    return wrapper;
}

function build_sections(){
    const main = document.querySelector('main'), nav = document.querySelector('#nav');
    fetch("src/data.json")
        .then((response) => response.json())
        .then((sections) => {
            for(let section of sections) {
                main.appendChild(build_section(section));
                nav.innerHTML += `
                    <li class="nav-item">
                        <a class="nav-link" href="#${slugify(section.name)}">${section.name}</a>
                    </li>
                `;
            }
        })
}