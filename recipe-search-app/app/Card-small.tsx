"use client";
import React, { useState } from 'react';

// interface Ingredients {
//     text:string;
//     quantity:string;
//     measure:string;
//     food:string;
//     weight:string; 
//     image:string;
//     foodCategory:string;
//     foodId:string;
// }
interface Card {
    img: string;
    title: string;
    description: string;
    // cusineType:string;
    ingredients:string[];
    timeRequired:number;
    key_2:number;
}

const CardSmall = ({ img, title, description, ingredients, timeRequired, key_2}: Card) => {
    const [open, setopen] = useState<boolean>(false);
    
    const handleOpen = () => {
        setopen(!open);
    }
    return (
            <div className="card-trending">
                <img src={img} alt="food-image" />
                <div className='trend-content'>
                    <details>
                        <summary>{title}</summary>
                        <p>{description}</p>
                        <h3>Ingredients:</h3>
                        <ol>
                            {
                                ingredients.map( (ingredient:any, index) => { return <li key={index}>
                                    {ingredient}
                                </li>} )
                            }
                        </ol>
                        <h3>Time required</h3>
                        {timeRequired} minutes .
                    </details>
                </div>
            </div>
    )
}

export default CardSmall