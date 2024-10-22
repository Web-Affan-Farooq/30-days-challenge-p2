"use client";
import React, { useState } from 'react';

const Home = () => {
  const baseValueLength = {
    "Millimeters (mm)": 1,
    "Centimeters (cm)": 10,
    "Meters (m)": 1000,
    "Kilometers (km)": 1000000,
    "Inches (in)": 25.4,
    "Feet (ft)": 304.8,
    "Yards (yd)": 914.4,
    "Miles (mi)": 1609344,
  };

  const [fromUnit, setfromUnit] = useState();
  const [toUnit, settoUnit] = useState();
  const [resultingUnit, setresultingUnit] = useState(`0 units`);
  const handleConversion = () => {
    console.log();
  }

  return (
    <div>
      <div className="card">
        <h1>Unit Convertor App</h1>
        <div className="unit">{resultingUnit}</div>
        <div style={{ textAlign: "center", fontWeight: "bold" }}>Units</div>
        <br />
        <label htmlFor="select from unit">Enter value to be converted</label>
        <input type="number" name='number' id='number' placeholder='Enter value' required />
        <br />
        <br />

        <label htmlFor="select from unit">Select from unit</label>
        <select name="from-unit" id="from-unit">
          <option value="Millimeters (mm)">millimeters (mm)</option>
          <option value="Centimeters (cm)">centimeters (cm)</option>
          <option value="Meters (m)">Meters (m)</option>
          <option value="Kilometers (km)">Kilometers (Km)</option>
          <option value="Inches (in)">Inches (in)</option>
          <option value="Feet (ft)">Feet (ft)</option>
          <option value="Yards (yd)">Yards (yd)</option>
          <option value="Miles (mi)">Miles (mi)</option>
        </select>
        <br />
        <br />
        <label htmlFor="select from unit">Select to unit</label>
        <select name="to-unit" id="to-unit">
        <option value="Millimeters (mm)">millimeters (mm)</option>
          <option value="Centimeters (cm)">centimeters (cm)</option>
          <option value="Meters (m)">Meters (m)</option>
          <option value="Kilometers (km)">Kilometers (Km)</option>
          <option value="Inches (in)">Inches (in)</option>
          <option value="Feet (ft)">Feet (ft)</option>
          <option value="Yards (yd)">Yards (yd)</option>
          <option value="Miles (mi)">Miles (mi)</option>
        </select>
        <br /><br />
        <button type="button" className="calculate" onClick={handleConversion}>
          Convert
        </button>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Home;