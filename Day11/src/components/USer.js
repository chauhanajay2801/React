import { useState } from "react"

const USer = (props) => {
  const [count, setcount] = useState(0)
  return (
    <div className="user-card">
        <h2>Name: {props.name}</h2>
        <h3>Location: Dehradun</h3>
        <h4>Contact: @ajaychauhan1</h4>
        <h4 onMouseOver={()=>{
          setcount(count+1)
        }}>count:{count}</h4>
    </div>
  )
}

export default USer