
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

// import {menu} from "./data.js"
const url ='https://hsexmvemzjlqjqnfwwob.supabase.co';

let menu;

const displayMenuItems = (menu) =>{
  let displayMenu = menu.map( (item) =>{
      return`
      <article class="menu-item">
        <img src="${item.remote_img}" alt="${item.title}" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
              ${item.descrip}
          </p>
        </div>
      </article>
      `     
  });
  //console.log('displayMenu before join', displayMenu);
  displayMenu = displayMenu.join('');
  //console.log('displayMenu after join', displayMenu);
  sectionCenter.innerHTML = displayMenu;


};


const displayMenuButtons = (menu) =>{
const categories = ['all' , ...new Set(menu.map((item) =>item.category))];
console.log(categories);

  let menuButtons = categories.map((category) =>{
      return`
      <button type="button" class="filter-btn" data-id=${category}>${category}</button>
      `
  });
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
    };
  
const fetchData = async ()=>{
  try{
    const response = await fetch(url);
    const data = response.json();
    console.log('fetch Data',data);
    return data;
  }catch(error){
    console.log(error);
  };
};

window.addEventListener('DOMContentLoaded', async () =>{
  menu = await fetchData();
  await displayMenuButtons(menu);
  await displayMenuItems(menu);

});
