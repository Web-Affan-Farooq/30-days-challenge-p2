import React from 'react';
import Image from 'next/image';

interface Card {
    movieTitle:string;
    movieBanner:string;
    actorsOfMovie:string;
    movieGenre:string;
    movieLang:string;
    movieReleased:string;
    movieWriter:string;
    movieTime:string;
    moviePlot:string;
}

const Search_card = ({movieTitle, movieBanner, actorsOfMovie, movieGenre, movieLang , movieReleased, movieWriter, movieTime, moviePlot}:Card) => {
  return (
    <div className='search-card'>
        <h2>{movieTitle}</h2>
        <p>{moviePlot}</p>
        <br />
        <h2>Details:</h2>
        <div className="card-container">
        <div className="card-content">
            <p>Actors : {actorsOfMovie}</p>
            <p>Released : {movieReleased}</p>
            <p>{movieTime} long</p>
            <p>Type : {movieGenre}</p>
            <p>Released languages : {movieLang}</p>
            <p>Writer : {movieWriter}</p>
        </div>
        <Image src={movieBanner} alt='movie banner' className='movie-banner' width={250} height={250}/>
        </div>
    </div>
  )
}

export default Search_card;