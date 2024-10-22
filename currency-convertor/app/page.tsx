"use client";

import React, { useState } from 'react';

const Home = () => {
  const [amount, setamount] = useState<number>();
  const [fromAmount, setfromAmount] = useState<string>("");
  const [toAmount, settoAmount] = useState<string>("");
  const [lastUpdated, setlastUpdated] = useState();
  // let currencies = [ "USD", "EUR" , "IND", "GBP", "JPY" ,"AUD", "CAD", "CHF", "CNY", "PKR"];
  const [currencies, setcurrencies] = useState<string[]>();

  const [message, setmessage] = useState<React.ReactElement>(<p className='text-3xl font-bold'>00</p>);

  const getData = async () => {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest");

    const data = await response.json();
    if (!response.ok && response.status !== 200) {
      console.log("Error while we report the problem");
      setmessage(<p className='text-3xl font-bold'>Try again later</p>)
    }

    console.log(data);
    
    setlastUpdated(data.time_last_updated);
  }
  getData();
  return (
    <div className='bg-black w-full h-screen'>
      <div className="w-3/5 bg-white p-5 rounded-xl text-center m-auto relative top-28">
        <h1 className='text-3xl font-bold'>Currency Convertor</h1>

        <br />
        <br />
        <input type="text" placeholder='Enter amount' id='amount' required className='w-full p-3 rounded-xl border-2 border-black border-solid' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {  
          setamount(Number(e.target.value))
        }} />
        <br />
        <br />
        <select name="fromCurrency" id="from-currency">
          <option value="">From currency</option>
        </select>
        <br />
        <br />
        <select name="fromCurrency" id="from-currency">
          <option value="">To currency</option>
        </select>
        <br />
        <br />
        {message}{toAmount}
        <br />
        <br />
        <p>Last updated : {}</p>
        <br />
      </div>
    </div>
  )
}

export default Home;