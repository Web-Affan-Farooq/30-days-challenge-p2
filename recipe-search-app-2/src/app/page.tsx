"use client";

import React, { useState } from 'react';
import createRecipe from '../../logic';
import Card_showcase from '../../components/Card-showcase';
import Header from '../../components/Header';
import Card_small from '../../components/Card-small';

const About = () => {
  const [search, setsearch] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [overlay, setoverlay] = useState(false);
  const [searchSuggestions, setsearchSuggestions] = useState(
    [
      "Biryani",
      "Korma",
      "Kebab",
      "Pecking Duck",
      "Daal Chawal",
      "Sushi",
      "Chinese",
      "Italian",
      "Afghani",
      "Indian",
      "Asian",
      "Burger",
      "Zinger Burger",
      "Pizza",
      "Chicken Jelfarezi",
      "Pasta",
      "Chicken Pasta",
    ]
  );

  const fillSearch = (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => {
    setsearch(event.currentTarget.innerText);
    console.log(event.currentTarget.innerText);
  };

  const getData = async () => {
    // fetching function
    try {
      const response_1 = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${search}`, {
        method: "GET",
        headers: {
          'X-Api-Key': `${process.env.NEXT_PUBLIC_API_KEY_1}`
        }
      })
      const data_1 = await response_1.json();
      if (!response_1.ok && response_1.status !== 200) {
        throw new Error("Error while fetching")
      }
      console.log(data_1);  // printing fetched data
      setoverlay(!overlay);  // hide the overlay and blur effect
    }
    catch (error) {
      console.error(error)
    }
  }

  // function use to split string into desired array format
  const convert = (ingredientString: string) => {
    return ingredientString.split("|");
  }

  return (
    <div>
      <div>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='text-center'>
          <input type="text" name='searchQuerry' id='search-querry' placeholder='Search' required className='border-2 border-solid border-gray-400 rounded-xl px-6 py-2 m-auto w-[300px]' onChange={
            (event: React.ChangeEvent<HTMLInputElement>) => {
              setsearch(event.target.value);
            }
          } onClick={(e: React.MouseEvent<HTMLInputElement>) => { setoverlay(!overlay) }} /><button type='button' onClick={getData}><i className="fa-solid fa-magnifying-glass border-2 border-solid border-gray-400 rounded-xl px-6 py-3 font-bold"></i></button>
          <div className='suggestions flex flex-col gap-3 flex-wrap'>
            {/*search suggestions are to be given below */}
          </div>
        </div>
        <br />
        <h1 className={`text-3xl p-2 font-bold ${overlay ? "blur-lg" : ""}`}>Trending <i className="fa-solid fa-fire"></i></h1>
        <br />
        <div className={`x-axis-container overflow-x-auto text-white whitespace-nowrap ${overlay ? "blur-lg" : ""}`}>
          <Card_showcase />
          <Card_showcase />
          <Card_showcase />
          <Card_showcase />
          <Card_showcase />
          <br />
          <br />
        </div>
        <br />
        <br />
        {/* <div className={`${recipes.length <=0? "hidden" : "block"}`}> */}
        <h1 className={`text-3xl font-bold text-black p-3 ${overlay ? "blur-lg" : ""}`}>Top Picks <i className="fa-solid fa-fire"></i></h1>
        {/*${recipes.length <=0? "hidden": "block"} */}
        <br />
        <br />
        <div className='w-full flex flex-row flex-wrap justify-center align-middle gap-4'>
          {/* {
              recipes.map((recipe:any, index:number) => {
                return  <Card_small recipeName={recipe.title} recipeLink='/' recipeImage='/images/example.jpg' recipeIngredients={["ingredient-1","ingredient-1","ingredient-1","ingredient-1","ingredient-1","ingredient-1","ingredient-1","ingredient-1","ingredient-1","ingredient-1"]} cusineType={"indian"} servings={"2 person"} mealType={"low carb"} instructions={recipe.instructions} key={index}/>
              })
            } */}
          <Card_small recipeName={"korma"} recipeLink='/' recipeImage='/images/example.jpg' recipeIngredients={["ingredient-1", "ingredient-1", "ingredient-1", "ingredient-1", "ingredient-1", "ingredient-1", "ingredient-1", "ingredient-1", "ingredient-1", "ingredient-1"]} cusineType={"indian"} servings={"2 person"} mealType={"low carb"} instructions={"this is the dummy instructions for recipe app this is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe appthis is the dummy instructions for recipe app"} />
        </div>
        
        <br />
        <br />
        <h1 className={`text-3xl font-bold text-black p-3 ${overlay ? "blur-lg" : ""}`}>Popular<i className="fa-solid fa-fire"></i></h1>
        <br />
        <div className={`flex flex-row justify-center align-middle flex-wrap gap-5 ${overlay ? "blur-lg" : ""}`}>
          <div className='flex flex-col flex-wrap gap-5'>
            <div className='w-72 flex flex-col flex-wrap justify-center align-middle bg-custom-gradient bg-cover bg-no-repeat bg-center p-5 m-auto text-center rounded-xl'><h1 className='text-center font-bold text-lg text-white' onClick={fillSearch}>Salads</h1></div>
          </div>

          <div className='flex flex-col flex-wrap gap-5'>
            <div className='w-72 flex flex-col flex-wrap justify-center align-middle bg-starters bg-cover bg-no-repeat bg-center p-5 m-auto text-center rounded-xl'><h1 className='text-center font-bold text-lg text-white' onClick={fillSearch}>Appetizers</h1></div>
          </div>

          <div className='flex flex-col flex-wrap gap-5'>
            <div className='w-72 flex flex-col flex-wrap justify-center align-middle bg-desserts bg-cover bg-no-repeat bg-center p-5 m-auto text-center rounded-xl'><h1 className='text-center font-bold text-lg text-white' onClick={fillSearch}>Desserts</h1></div>
          </div>

          <div className='flex flex-col flex-wrap gap-5'>
            <div className='w-72 flex flex-col flex-wrap justify-center align-middle bg-soups bg-cover bg-no-repeat bg-center p-5 m-auto text-center rounded-xl'><h1 className='text-center font-bold text-lg text-white' onClick={fillSearch}>Soups</h1></div>
          </div>

          <div className='flex flex-col flex-wrap gap-5'>
            <div className='w-72 flex flex-col flex-wrap justify-center align-middle bg-dinners bg-cover bg-no-repeat bg-center p-5 m-auto text-center rounded-xl'><h1 className='text-center font-bold text-lg text-white' onClick={fillSearch}>Dinner</h1></div>
          </div>

          <div className='flex flex-col flex-wrap gap-5'>
            <div className='w-72 flex flex-col flex-wrap justify-center align-middle bg-lunches bg-cover bg-no-repeat bg-center p-5 m-auto text-center rounded-xl'><h1 className='text-center font-bold text-lg text-white' onClick={fillSearch}>Lunch</h1></div>
          </div>

          <div className='flex flex-col flex-wrap gap-5'>
            <div className='w-72 flex flex-col flex-wrap justify-center align-middle bg-chinese bg-cover bg-no-repeat bg-center p-5 m-auto text-center rounded-xl'><h1 className='text-center font-bold text-lg text-white' onClick={fillSearch}>Chinese</h1></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About;