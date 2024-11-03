import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-black w-full fixed text-white py-6 px-7 flex flex-row flex-nowrap justify-between align-middle items-center'>
    <div className='text-2xl font-bold'>CookBook</div>
    <Link href={'/Favourites'}>
    <div><i className="fa-regular fa-heart text-[20px]"></i> <div className={`bg-red-700 text-center relative top-2 right-2 w-6 h-6 rounded-full bg-link inline-block`}>0</div></div>
    </Link>
  </header>
  )
}

export default Header