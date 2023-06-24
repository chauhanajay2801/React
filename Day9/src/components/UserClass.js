import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name:"Dummy",
        location:"Default",
        photo:"Dummpy photo"
      },count:0
    };
    // console.log("child constructor")
  }
  

  async componentDidMount(){
    // console.log("component did mount child class")
  const data = await fetch("https://api.github.com/users/chauhanajay2801");
  const json = await data.json();
  console.log(json)

  this.setState({
    userInfo:json
  })
  }

  componentDidUpdate(){
    console.log("did update")
  }
  
  componentWillUnmount(){
    console.log("will unmount")
  }

  render() {
    // console.log("child render")
    const {name,location,avatar_url} = this.state.userInfo
    return (
      <div className="user-card">
      <img src={avatar_url}  />
        <h1>Class Based Component</h1>
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @ajaychauhan1</h4>
        <h4 onMouseOver={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Count:{this.state.count}</h4>
      </div>
    );
  }
}




export default UserClass;
