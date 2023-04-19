import React from 'react'
import { useState } from 'react'
import './Bmi.css'

function Bmi() {
    const [height,setHeight] =useState(null)
    const [Weight,setWeight] =useState(null)
    const [bmi,setBmi] =useState(0)
    const [status,setStatus] =useState('')
   
  function Bmi(){
   
    const bmi = (Weight/(height/100)**2)
    setBmi(bmi.toFixed(2))
    let fullstatus='obese'
    if(bmi<=18.5){
        fullstatus='UnderWeight'
    }else if (bmi>=18.5 && bmi<=24.9){
        fullstatus='Healty'
    }else if(bmi>=25 && bmi <=29.9){
        fullstatus='OverWeight'
    }else{
       fullstatus= alert('please enter values')
    }
    setStatus(fullstatus);
  }
    let imgsrc;
    if(bmi<1){
        imgsrc=null
    }else if(bmi<=18.5){
        imgsrc=require('../Image/underweight.jpeg');
    }
    else if(bmi>=18.5 && bmi<=24.9){
        imgsrc=require('../Image/healty.png');
    }
    else if(bmi>=25 && bmi <=29.9){
        imgsrc=require('../Image/overweight.jpeg');
    }else{
     imgsrc=null
    }

  return (
    <div>
      <h3><b>BOdy Mass Idex Calculator</b></h3>
      <form  className="Form" id="Form">
<div Class="Row-One">
  <input Type="Text" Class="Text-Input" Id="Age"  Autocomplete="Off" /><p Class="Text">Age</p>
  <label className="Container">
  <input Type="Radio" Name="Radio" id='F'/><p Class="Text">Female</p>
    <span className="Checkmark"></span>
  </label>
  <label className="Container">
  <input Type="Radio" Name="Radio" Id="M"/><p className="Text">Male</p>
    <span className="Checkmark"></span>
  </label>  
  </div>

<div Class="Row-Two">
<input type="text" value={height} onChange={(e)=>setHeight(e.target.value)} className="Text-Input" id="Height" Autocomplete="Off" /><p className="Text">Height (Cm)</p>
<input type="text" value={Weight} onChange={(e)=>setWeight(e.target.value)} className="Text-Input" id="Weight" Autocomplete="Off" /><p className="Text">Weight (Kg)</p>
</div>
<button Type="Button" onClick={Bmi} id="Submit">Submit</button>
</form>
<h3 className='status'>BMI :{bmi}<h4 className='result'>{status}</h4><img className='img' src={imgsrc} alt="" /></h3>

    </div>
  
  )
}

export default Bmi
