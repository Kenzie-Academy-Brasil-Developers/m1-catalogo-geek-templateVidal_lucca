const productsPaintings = [


  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "Paintings"
  },

  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings"
  },

  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings"
  },

  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Wactch",
    price: "R$120,00",
    type: "Paintings"
  },
];

const paintingsContainer = document.getElementById('Paintings');

productsPaintings.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = product.image;

  const title = document.createElement('h2');
  title.textContent = product.name;

  const price = document.createElement('h3');
  price.textContent = product.price;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(price);

  paintingsContainer.appendChild(card);
});




const productsAction = [

  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Actions Figures"
  },

  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Actions Figures"
  },
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Actions Figures"
  },
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Actions Figures"

  },
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Actions Figures"
  },
];
const productsContainer = document.getElementById('Action-Figures');

productsAction.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = product.image;

  const title = document.createElement('h2');
  title.textContent = product.name;

  const price = document.createElement('h3');
  price.textContent = product.price;




  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(price);




  productsContainer.appendChild(card)

  
});

