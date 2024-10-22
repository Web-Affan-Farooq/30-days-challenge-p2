"use client";
import React, { useState, ChangeEvent } from 'react';

const Home = () => {
  const [color, setColor] = useState<string>("#000000");

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setColor(e.target.value);
  };
  
  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(color);
    alert("Copied to Clipboard!");
  };
  
  return (
    <div className='container'>
      <div className="card"><h1>Color Picker App</h1></div>
    </div>
  )
}

export default Home;