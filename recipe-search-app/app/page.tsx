"use client";
import React, { useState } from 'react';
import CardSmall from './Card-small';

const Home = () => {
  const [querry, setquerry] = useState("");
  const [recipes, setrecipes] = useState([]);
  const handleQuerry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setquerry(event.target.value);
  }

  const getData = async () => {
    try {
      const url = `https://api.edamam.com/search?q=${querry}&app_id=${process.env.NEXT_PUBLIC_EDAMAM_APP_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAM_APP_KEY}`;
      const response = await fetch(url)
      const data = await response.json();
      if (!response.ok && response.status !== 200) {
        throw new Error("Error while fetching")
      }
      console.log(data);
      setrecipes(data.hits);
    }
    catch (error) {
      console.error(error)
    }
  }
  // getData();

  return (
    <div className='container'>
      <h1>Search recipes</h1>
      <div className="search">
        <input type="text" name='searchQuerry' id='search-querry' placeholder='Search for recipes' required onChange={handleQuerry} />
        <button type="button" className='search-btn' onClick={getData}>Search</button>
      </div>
      <div className="trending">
        <h1>Trending</h1>
        <div className="card-trending">
          <img src="https://i.pinimg.com/564x/23/76/0a/23760acac7918992c874165274c4e7bb.jpg" alt="" />
          <div className='trend-content'>
            <h3>Biryani</h3>
            <p>Lorem ipsum dolor sit amet consectetur ...</p>
          </div>
        </div>
        {
          recipes?.map((recipe: any, index: number) => { return <CardSmall title={querry} description={recipe.recipe.label} img={recipe.recipe.image} key={index} key_2={index} ingredients={recipe.recipe.ingredientLines} timeRequired={recipe.recipe.totalTime} /> })
        }
      </div>
    </div>
  )
}

export default Home;