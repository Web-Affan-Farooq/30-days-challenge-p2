"use client";
import React, { useState } from 'react';
import Search_card from './search-card';

const Home = () => {
  const [searchItem, setsearchItem] = useState<string>("");
  const [searchResults, setsearchResults] = useState<React.ReactElement>(<p>No searches ...</p>)
  const getData = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    try {
      const response = await fetch(`https://www.omdbapi.com/?t=${searchItem}&apikey=${apiKey}`);
      const data = await response.json();
      if (!response.ok && response.status !== 200) {
        console.error("Error while fetching ");
        setsearchResults(<p>Error occured while fetching resource</p>)
      }
      setsearchResults(<Search_card movieTitle={data.Title} movieBanner={data.Poster} actorsOfMovie={data.Actors} movieGenre={data.Genre} movieLang={data.Language} movieTime={data.Runtime} movieReleased={data.Released} movieWriter={data.Writer} moviePlot={data.Plot}/>)     
    } catch (error) {
      console.error(error);
      setsearchResults(<p>Error occured while fetching resource</p>);
    }
  }
  
  return (
    <div className='container'>
      <br />
      <br />
      <h1>Movie Search app</h1>
      <div className="box">
        <label htmlFor="movie name">
          <input type="text" name='searchQuery' id="search" placeholder='Enter movie name' required onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setsearchItem(e.target.value)
          }}/>
        </label>
        <button type='button' onClick={getData}>Search</button>
      </div>
      {searchResults}
    </div>
  )
}

export default Home;