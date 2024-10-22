"use client";
import React, { useState} from 'react';
const Home = () => {
  const [addUppercase, setaddUppercase] = useState<boolean>(false);
  const [addLowercase, setaddLowercase] = useState<boolean>(false);
  const [addNumbers, setaddNumbers] = useState<boolean>(false);
  const [addSpecialChars, setaddSpecialChars] = useState<boolean>(false);
  const [quantity, setquantity] = useState<number>(10);

  const uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const specialChars = "`~!@#$%^&*()-_+={}[]|\/.,<>";
  const numbers = "0123456789";

  const [generatedPassword, setgeneratedPassword] = useState<string | undefined>();

  const handleGeneration = () => {
    let allChars = "";
    if(addLowercase) allChars += uppercase;
    if(addLowercase) allChars += lowercase;
    if(addSpecialChars) allChars += specialChars;
    if(addNumbers) allChars += numbers;

    if(allChars === "") {
      alert("Please select atleast one chracter type or multiple chars")
    }
    const pass = [];

    for(let i=0; i<= quantity; i++) {
      const number = Math.floor(Math.random()*allChars.length +1);
      pass.push(allChars.split("")[number]);
    }
    setgeneratedPassword(pass.toString());
  }
    return (
      <div className='container'>
        <div className="card">
          <h1>Password Generator App</h1>
          <label htmlFor="Select for characters">
            Select for characters
          </label>
          <br />
          <br />
          <input type="radio" name="includeUppercase" id="include-uppercase" onChange={() => {
            setaddUppercase(!addUppercase);
          }} /> <label htmlFor="Include uppercase">Include uppercase</label>
          <br />
          <input type="radio" name="includeLowercase" id="include-lowercase" onChange={() => {
            setaddLowercase(!addLowercase);
          }} /> <label htmlFor="Include lowercase">Include lowercase</label>
          <br />
          <input type="radio" name="includeSpecialCharacters" id="include-specialcharacters" onChange={() => {
            setaddSpecialChars(!addSpecialChars);
          }} /> <label htmlFor="Include special characters">Include special characters</label>
          <br />
          <input type="radio" name="includeNumbers" id="include-numbers" onChange={() => {
            setaddNumbers(!addNumbers);
          }} /> <label htmlFor="Include numbers">Include numbers</label>
          <br />
          <br />
          <label htmlFor="select number of characters">Select number of characters</label>
          <br /><br />
          <select name="charQuantity" id="char-quantity" onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {
            setquantity(Number(e.target.value));
          }}>
            <option value="10">10 characters (easy)</option>
            <option value="20">20 characters (normal)</option>
            <option value="30">30 characters (medium)</option>
            <option value="40">40 characters (Hard)</option>
          </select>
          <br />
          <br />
          <button type="button" onClick={handleGeneration}>Generate</button>
          <br />
          <br />
          <div className="results" onClick={() => {
            window.navigator.clipboard.writeText(generatedPassword? generatedPassword:"");  //ignore that point
            alert("Copied to clipboard");
          }}>{generatedPassword}</div>
        </div>
      </div>
    )
  }

  export default Home;