"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Home = () => {
  const [heartVisibility, setheartVisibility] = useState(false);
  const [userName, setuserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserAddress, setUserAddress] = useState("");
  const [userTel, setuserTel] = useState("");
  const [userImage, setuserImage] = useState("");
  
  const getData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      if (!response.ok && response.status !== 200) {
        console.log("Error while fetching")
      }
      setuserName(data.results[0].name.title+" "+ data.results[0].name.first + " " +data.results[0].name.last);
      setUserEmail(data.results[0].email);
      setUserAddress(`${data.results[0].location.street.name} no ${data.results[0].location.street.number}, ${data.results[0].location.state} state, ${data.results[0].location.city}, ${data.results[0].location.country}`);
      setuserTel(data.results[0].phone);
      setuserImage(data.results[0].picture.medium);

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  },[]);

  const handleHeart = () => {
    setheartVisibility(true);
    setTimeout(() => {
      setheartVisibility(false);
    }, 2000);
  }

  return (
    <div className='bg-black w-full h-screen'>
      <i className={`fa-solid fa-heart heart text-red-700 font-bold text-[40px] absolute top-[50vh] left-[50vw] z-10 ${heartVisibility? "opacity-100" : "opacity-5"}`}></i>
      <div className='w-[500px] h-auto bg-white rounded-2xl m-auto relative top-28 p-5'>
        <h1 className='text-center text-3xl font-bold text-nowrap'>Random User Generator</h1>
        <br />
        <button type="button" className='text-white bg-black p-3 rounded-xl font-bold border-none' onClick={getData}>Generate user</button>
        <br />
        <br />
        <div className='border-2 p-5 border-solid border-gray-600 rounded-2xl'>
          <Image src={userImage} alt='user image' width={200} height={200} className='object-cover rounded-full m-auto' />
          <br />
          <div className=' font-bold text-2xl'><i className="fa-solid fa-user"></i> {userName}</div>
          <br />
          <div className=''><i className="fa-solid fa-envelope"></i> {UserEmail}</div>
          <div className=''><i className="fa-solid fa-location-dot"></i> {UserAddress}</div>
          <div className=''><i className="fa-solid fa-phone"></i> {userTel}</div>
          <br />
          <br />
          <button type="button" className='font-bold border-2 border-solid border-black py-2 px-5 rounded-2xl m-auto text-center' onClick={handleHeart}>Appreciate User</button>
        </div>
      </div>
    </div>
  )
}

export default Home;