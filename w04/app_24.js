import {menu} from "./data.js"

// const category = [   
//     'all','breakfast','lunch','dinner','shakes'
// ]
// const menu = [
//     {
//         id: 1,
//         title: "Baked Egg",
//         category: "breakfast",
//         price: 11.59,
//         image: "./images/my-1.jpg",
//         remote_image: "https://skhsjlwrhersyemrmkib.supabase.co/storage/v1/object/public/javascript/demo-208410349/w04-menu-starter/my-1.jpg",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusantium natus hic tenetur esse commodi sit perferendis similique dicta earum!"
//     },
//     {
//         id: 2,
//         title: "Steak and fried egg",
//         category: "lunch",
//         price: 17.99,
//         image: "./images/my-2.jpg",
//         remote_image: "https://skhsjlwrhersyemrmkib.supabase.co/storage/v1/object/public/javascript/demo-208410349/w04-menu-starter/my-2.jpg",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusantium natus hic tenetur esse commodi sit perferendis similique dicta earum!"
//     },
//     {
//         id: 3,
//         title: "Spaghetti with meatballs",
//         category: "dinner",
//         price: 18.79,
//         image: "./images/my-3.jpg",
//         remote_image: "https://skhsjlwrhersyemrmkib.supabase.co/storage/v1/object/public/javascript/demo-208410349/w04-menu-starter/my-3.jpg",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusantium natus hic tenetur esse commodi sit perferendis similique dicta earum!"
//     },
//     {
//         id: 4,
//         title: "buttermilk pancakes",
//         category: "breakfast",
//         price: 15.99,
//         image: "./images/item-1.jpeg",
//         remote_image: "https://skhsjlwrhersyemrmkib.supabase.co/storage/v1/object/public/javascript/demo-208410349/w04-menu-starter/item-1.jpeg",
//         desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammockfreegan copper mug whatever cold-pressed"      
//     },
//     {
//         id: 5,
//         title: "Spaghetti with meatballs",
//         category: "dinner",
//         price: 18.79,
//         image: "./images/item-5.jpeg",
//         remote_image: "",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusantium natus hic tenetur esse commodi sit perferendis similique dicta earum!"
//     },
//     {
//         id: 6,
//         title: "Spaghetti with meatballs",
//         category: "dinner",
//         price: 18.79,
//         image: "./images/item-6.jpeg",
//         remote_image: "",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusantium natus hic tenetur esse commodi sit perferendis similique dicta earum!"
//     },
//     {
//         id: 7,
//         title: "ice-cream",
//         category: "dessert",
//         price: 18.79,
//         image: "./images/my-4.jpg",
//         remote_image: "https://skhsjlwrhersyemrmkib.supabase.co/storage/v1/object/public/javascript/demo-208410349/w04-menu-starter/my-4.jpg",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusantium natus hic tenetur esse commodi sit perferendis similique dicta earum!"
//     },

// ];
const categories = ['all' , ...new Set(menu.map((item) =>item.category))]
console.log(categories);


const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');




const displayMenuButtons = () =>{
    let menuButtons = categories.map((category) =>{
        return`
        <button type="button" class="filter-btn" data-id=${category}>${category}</button>
        `
    })
    //console.log('filterItems before join', menuButtons);
    menuButtons = menuButtons.join('');
    //console.log('filterItems after join',menuButtons);
    btnContainer.innerHTML = menuButtons;
        const filterBtns =document.querySelectorAll('.filter-btn')
        console.log('filterBtns',filterBtns);
        filterBtns.forEach((btn)=>{
          btn.addEventListener('click',(e)=>{
            console.log('data-id',e.currentTarget.dataset.id);
            const category = e.currentTarget.dataset.id;
            const filterMenu= menu.filter((item)=>item.category === category);
            console.log('filterMenu',filterMenu);
            if(category === 'all'){
              console.log('all',menu)
              displayMenuItems(menu);
            }else{
              console.log(category,filterMenu);
              displayMenuItems(filterMenu);
            }
          });
        });
      }
    

// const displayMenuButtons = (menu) =>{
//     let displayButton = menu.map( (category) =>{
//         return`
//         <div class="btn-container">
//         <button type="button" class="filter-btn" data-id="${category}">${category}</button>
//       </div> 
//         `     
//     });
    
//     console.log('filterItems before join', displayButton);
//     displayButton = displayButton.join('');
//     console.log('filterItems after join',displayButton);
//     btnContainer.innerHTML = displayButton;
// };
const displayMenuItems = (menu) =>{
    let displayMenu = menu.map( (item) =>{
        return`
        <article class="menu-item">
          <img src="${item.image}" alt="${item.title}" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
          </div>
        </article>
        `     
    });
    //console.log('displayMenu before join', displayMenu);
    displayMenu = displayMenu.join('');
    //console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;


}



window.addEventListener('DOMContentLoaded', () =>{
    displayMenuButtons(menu);
    displayMenuItems(menu);

});
