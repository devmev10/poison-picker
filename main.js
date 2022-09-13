//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


  document.querySelector('.get-button').addEventListener('click', getDrink)
  document.querySelector('.next-button').addEventListener('click', nextDrink)
  
  // extra variable to store data outside of your fetch call
  let drinkArray = []
  let counter = 0

  function getDrink(){
  let drink = document.querySelector('input').value

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.drinks)
    
    //assign data to a variable so you can use it in nextDrink function
    drinkArray = data.drinks

    document.querySelector('h2').innerText = data.drinks[0].strDrink
    document.querySelector('img').src = data.drinks[0].strDrinkThumb
    document.querySelector('h3').innerText = data.drinks[0].strInstructions  
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
  }

      //Next button click event  
      function nextDrink(){
        counter++
    
        if (counter >= drinkArray.length){ counter = 0}
        
          document.querySelector('h2').innerText = drinkArray[counter].strDrink
          document.querySelector('img').src = drinkArray[counter].strDrinkThumb
          document.querySelector('h3').innerText = drinkArray[counter].strInstructions
        
      }
  
  
