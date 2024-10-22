import React from 'react'

interface Button {
    text:string;
}
const Button = ({text}:Button) => {
  return (
    <button type="button" className='bg-black m-auto w-36 rounded-md py-2 px-5 font-bold'>{text}</button>
  )
}

export default Button