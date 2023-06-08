const search = document.querySelector('#search');
const submit = document.querySelector('#submit');
const random = document.querySelector('#random');
const resultHeading = document.querySelector('#result-heading');
const mealsEl = document.querySelector('#meals');
const single_mealEl = document.querySelector('#single-meal');

const searchMeal = (e) => {
  e.preventDefault();
  const term = search.value;
  if (term.trim()) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
      .then(response => response.json())
      .then(data => {
        console.log('cocktail data', data);

        if (data.drinks === null) {
          resultHeading.innerHTML = `<p>There are no search results. Try again!</p>`;
        } else {
          resultHeading.innerHTML = `<h2>Search Result for '${term}'</h2>`;
          mealsEl.innerHTML = data.drinks
            .map((cocktail) => {
              return `
                <div class="meal">
                  <img src="${cocktail.strDrinkThumb}" />
                  <div class="meal-info" data-mealid="${cocktail.idDrink}">
                    <h3>${cocktail.strDrink}</h3>
                  </div>
                </div>
              `;
            })
            .join('');
        }
      });
  } else {
    alert('Please enter a search term');
  }
};


const getMealById = (mealID) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(resp => resp.json())
    .then(data => {
      console.log('single meal', data);
      const meal = data.meals[0];
      addMealToDOM(meal);
    });
};

const addMealToDOM = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    } else {
      break;
    }
  }
  console.log('ingredients', ingredients);

  single_mealEl.innerHTML = `
    <div class="single-meal">
      <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" />
      <div class="main">
        <p>${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>${ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
      </div>
    </div>
  `;
};

submit.addEventListener('click', searchMeal);

mealsEl.addEventListener('click', e => {
  console.log('e.path', e.path);
  const path = e.path || (e.composedPath && e.composedPath()); // Support for different browser versions
  const mealInfo = path.find(item => {
    if (item.classList) {
      return item.classList.contains('meal-info');
    } else {
      return false;
    }
  });
  if (mealInfo) {
    console.log('mealInfo', mealInfo);
    const mealID = mealInfo.getAttribute('data-mealid');
    getMealById(mealID);
  }
});

random.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
			createMeal(res.meals[0]);
		})
		.catch(e => {
			console.warn(e);
		});
});

const createMeal = meal => {
	const ingredients = [];

	// Get all ingredients from the object. Up to 20
	for (let i = 1; i <= 20; i++) {
		if (meal[`strIngredient${i}`]) {
			ingredients.push(
				`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
			);
		} else {
			// Stop if there are no more ingredients
			break;
		}
	}
  console.log('ingredients', ingredients);

  single_mealEl.innerHTML = `
    <div class="single-meal">
      <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" />
      <div class="main">
        <p>${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>${ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
      </div>
    </div>
  `;
};

