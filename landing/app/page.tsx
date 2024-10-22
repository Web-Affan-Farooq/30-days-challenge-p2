import React from 'react';
import Section_1 from '@/components/Section-1/page';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='text-center h-auto'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className='text-white font-bold text-5xl m-3 leading-20'>
        Explore What I've coded
      </h1>
      <br />
      <br />
      <div className='w-3/4 m-auto'>
      <p className='leading-8'>Completed my <b>30dayscodingchallange</b> where I've been creating some of the incredible projects utilizing full power of <strong><span className='text-blue-400'>TailwindCSS</span></strong>, <strong className='text-gray-400'> NextJS</strong> and <strong className='text-gray-500'>Shadcn-UI</strong> .</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Section_1/>
    </div>
  )
}

export default Home;