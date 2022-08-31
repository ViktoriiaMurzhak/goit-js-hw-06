const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]

const listEl = document.querySelector('.gallery')

function makeItemLinkEl(obj) {
  images.forEach((element) => {
   element.alt = element.alt.split(' ').join('-');
    
  listEl.insertAdjacentHTML('beforeend', `<li class='gallery__item'><img class='gallery__img' src=${element.url} alt=${element.alt} width = 300></li>`)
  })
}

makeItemLinkEl(images)

// ! =====================================
// Варіант 2 (іншим способом)

// const listEl = document.querySelector('.gallery')

// function makeItemLinkEl(obj) {
// images.forEach((element) => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('gallery__item');

//   const imageEl = document.createElement('img')
//   imageEl.src = element.url;
//   imageEl.alt = element.alt;
//   imageEl.width = 300;
  
//   itemEl.appendChild(imageEl);
//   console.log(itemEl);
  
//   listEl.appendChild(itemEl);
//   })
// }

// makeItemLinkEl(images)

