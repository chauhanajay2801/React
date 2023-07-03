import React, { useState } from 'react'

const Section = ({ title,description }) => {
  const [isVisible,setisVisible] =useState(false)
  return(
    <div>
      <h3>{title}</h3>
      {
        isVisible ?  <button  onClick={()=>{
        setisVisible(false)
      }}>hide desc</button>
      : 
      <button  onClick={()=>{
        setisVisible(true)
      }}>Show desc</button>
      }

      {isVisible && <p>{description}</p>}
      
     
    </div>
  )
}

const Grocery = () => {
  return (
    <>
     <h1>Instamart</h1>
    
    </>
  )
}

export default Grocery