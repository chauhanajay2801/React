import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="user-card">
        <h1>Class Based Component</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Dehradun</h3>
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
