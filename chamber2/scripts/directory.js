const navButton = document.getElementById('nav-button');
const navMenu = document.getElementById('nav-menu');

navButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navButton.classList.toggle('open');
});

const container = document.getElementById('container');

const url = 'data/members.json';

async function getCardData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCards(data);
}


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
    container.classList.add("container");
    container.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("container");
});




const displayCards = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        card.className = "card";
        
        let name = document.createElement('h2');
        name.className = "name";
        name.textContent = member.name;
        card.appendChild(name);
        
        let address = document.createElement('p');
        address.className = "address";
        address.textContent = member.address;
        card.appendChild(address);
        
        let phone = document.createElement('p');
        phone.className = "phone";
        phone.textContent = member.phone;
        card.appendChild(phone);
        
        let website = document.createElement('a');
        website.className = "website";
        website.href = member.website;
        website.textContent = "Visit Website";
        card.appendChild(website);
        
        let image = document.createElement('img');
        image.className = "image";
        image.loading = "lazy";
        image.width = 340;
        image.height = 440;
        image.src = member.image;
        image.alt = member.name;
        card.appendChild(image);

        container.appendChild(card);
    });
};

getCardData();

