import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import Link from 'next/link';


// small cards

interface Card_1 {
    img: string;
    projectName: string;
    description: string;
    path: string;
}

const Card_1 = ({ img, projectName, description, path }: Card_1) => {
    return (
        <div className='w-80 max-md:w-68 max-sm:w-80 max-md:gap-3  p-5 rounded-2xl flex flex-col flex-wrap gap-3 text-center'>
            <Image src={img} alt='project picture' width={100} height={100} className='object-cover w-full h-64 max-md:h-48 rounded-xl' />
            <h1 className='text-2xl font-bold'>{projectName}</h1>
            <p>{description}</p>
            <Link href={path}><Button text={'Explore'} /></Link>
        </div>
    )
}

export default Card_1;