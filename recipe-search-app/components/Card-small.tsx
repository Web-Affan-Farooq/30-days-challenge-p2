"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface CardData {
  recipeName: string;
  recipeLink: string;
  recipeImage: string;
  recipeIngredients: string[];
  cusineType: string;
  servings: string;
  mealType: string;
  instructions: string;
}
const Card_small = ({
  recipeName,
  recipeLink,
  recipeImage,
  recipeIngredients,
  cusineType,
  servings,
  mealType,
  instructions
}: CardData) => {
  const [cardStatus, setcardStatus] = useState(false);
  return (
    <div className={`bg-black w-[350px] py-3 px-6 rounded-xl flex ${cardStatus? "flex-col-reverse gap-10" : "flex-row"} justify-between align-middle flex-nowrap`} onClick={(e:React.MouseEvent<HTMLDivElement>) => {
      setcardStatus(!cardStatus);
    }}>
      <div className='flex flex-col flex-nowrap justify-center align-middle'>
        <h1 className='text-1xl text-white font-bold'>{recipeName}</h1>
        <br />
        <p className={`text-blue-400 text-[15px] cursor-pointer ${cardStatus ? "hidden" : "block"}`} onClick={(e:React.MouseEvent<HTMLParagraphElement>) => {
      setcardStatus(!cardStatus)
    }}>See more ..</p>
        <div className={`${cardStatus? "block": "hidden"} text-white`}>
          <h1 className='text-2xl font-bold text-white'>Recipe:</h1>
          <br />
          <h2 className='font-bold'>
          ingredients:
          </h2>
          <br />
          <ul>
            {recipeIngredients.map((ingredient:string, index:number) => {
              return <li key={index}>{index+1}. ingredient</li>
            })}
          </ul>
          <br />
          <h2 className='font-bold'>
          Instructions:
          </h2>
          <br />
          <p>{instructions}</p>
          <br />
          <h2 className='font-bold'>
          Meal type:
          </h2>
          <br />
          <p>{mealType}</p>
          <br />
          <h2 className='font-bold'>
          Cusine type:
          </h2>
          <br />
          <p>{cusineType}</p>
          <br />
          <h2 className='font-bold'>
          Servings:
          </h2>
          <br />
          <p>{servings}</p>
          <br />
          <br />
          <button type="button" className='font-semibold border-2 py-3 px-5 rounded-2xl'>Add to favourites ❤</button>
        </div>
      </div>
      <Image src={recipeImage} height={60} width={60} alt='image' className={`w-[${cardStatus? "200px": "100px"}] object-cover object-center h-[${cardStatus? "200px" : "100px"}] ${cardStatus? "m-auto" : ""}`} />
    </div>
  )
}

export default Card_small;