"use client";

import React, { useState } from 'react';
import "../new.css";

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
    try {
      const url = `https://api.edamam.com/search?q=${search}&app_id=${process.env.NEXT_PUBLIC_EDAMAM_APP_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAM_APP_KEY}`;
      const response = await fetch(url)
      const data = await response.json();
      if (!response.ok && response.status !== 200) {
        throw new Error("Error while fetching")
      }
      console.log(data);
      // setrecipes(recipes.hits);  fix this
    }
    catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <div>
        <div className={`top-btn-container p-6 whitespace-nowrap overflow-x-auto ${overlay ? 'blur-lg' : ""}`}>
          <button type='button' className='top-buttons px-6 py-2 font-bold border-2 border-solid border-black rounded-xl mx-1.5' onClick={fillSearch}>Lunch</button>
          <button type='button' className='top-buttons px-6 py-2 font-bold border-2 border-solid border-black rounded-xl mx-1.5' onClick={fillSearch}>Breakfast</button>
          <button type='button' className='top-buttons px-6 py-2 font-bold border-2 border-solid border-black rounded-xl mx-1.5' onClick={fillSearch}>Dinner</button>
          <button type='button' className='top-buttons px-6 py-2 font-bold border-2 border-solid border-black rounded-xl mx-1.5' onClick={fillSearch}>Feast</button>
        </div>
        <br />
        <br />
        <div className='text-center'>
          <input type="text" name='searchQuerry' id='search-querry' placeholder='Search' required className='border-2 border-solid border-gray-400 rounded-xl px-6 py-2 m-auto w-[300px]' onChange={
            (event: React.ChangeEvent<HTMLInputElement>) => {
              setsearch(event.target.value);
            }
          } onClick={(e: React.MouseEvent<HTMLInputElement>) => { setoverlay(!overlay) }} /><button type='button' onClick={getData}><i className="fa-solid fa-magnifying-glass border-2 border-solid border-gray-400 rounded-xl px-6 py-3 font-bold"></i></button>
          <div className='suggestions flex flex-col gap-3 flex-wrap'>
            {/* {
              searchSuggestions.filter((suggestion: string) => {
                return <div className={`border-2 border-solid border-gray-400 rounded-xl px-6 py-2 font-bold w-[300px] m-auto text-left flex flex-row justify-between align-middle`}><div>
                  {suggestion}</div><i className="fa-solid fa-magnifying-glass relative top-1 font-bold"></i></div>
              })
            } */}
          </div>
        </div>
        <br />
        <h1 className={`text-3xl p-2 font-bold ${overlay ? "blur-lg" : ""}`}>Top Searches</h1>
        <br />
        <div className={`x-axis-container overflow-x-auto text-white whitespace-nowrap ${overlay ? "blur-lg" : ""}`}>

          {/* <div className='flex flex-row gap-6 w-svw'> */}

          <div className=" rounded-xl p-5 bg-custom-gradient bg-no-repeat bg-center bg-cover  w-72 whitespace-normal inline-block mx-4 h-80">
            <h2 className='text-2xl font-bold'>Recipe Name</h2>
            <br />
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nihil praesentium quos vel amet </p>
            </div>
          </div>


          <div className=" rounded-xl p-5 bg-custom-gradient bg-no-repeat bg-center bg-cover  w-72 whitespace-normal inline-block mx-4 h-80">
            <h2 className='text-2xl font-bold'>Recipe Name</h2>
            <br />
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nihil praesentium quos vel amet </p>
            </div>
          </div>


          <div className=" rounded-xl p-5 bg-custom-gradient bg-no-repeat bg-center bg-cover w-72 whitespace-normal inline-block mx-4 h-80">
            <h2 className='text-2xl font-bold'>Recipe Name</h2>
            <br />
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nihil praesentium quos vel amet </p>
            </div>
          </div>

          <div className=" rounded-xl p-5 bg-custom-gradient bg-no-repeat bg-center bg-cover w-72 whitespace-normal inline-block mx-4 h-80">
            <h2 className='text-2xl font-bold'>Recipe Name</h2>
            <br />
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nihil praesentium quos vel amet </p>
            </div>
          </div>
          {/* </div> */}

          <br />
          <br />
        </div>
        <h1 className={`text-3xl font-bold text-black p-3 ${overlay ? "blur-lg" : ""}`}>Popular <i className="fa-solid fa-fire"></i></h1>
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