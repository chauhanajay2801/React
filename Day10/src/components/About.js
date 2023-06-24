// import React from "react"
import {Component} from "react"
import USer from "./USer"


class About extends Component{

   constructor(props){
    super(props);
    console.log("parent construct")
   }

   componentDidMount(){
    console.log("component did mount parent class")
  }

   render(){
    console.log("parent render")
    return(
        <div>
                     <h1>About</h1>
                     <h2>The data of members</h2>
                     {/* <UserClass name = {"Ajay Class"}/> */}
                     <USer name ={"Ajay"}/>
                </div>
    )
   }
}

// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>The data of members</h2>
//             <UserClass name = {"Ajay Class"}/>
//             <USer name ={"Ajay"}/>
//         </div>
//     )
// }



export default About