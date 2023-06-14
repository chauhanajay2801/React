import React from "react";
import ReactDOM from "react-dom/client";

const number =1000;
const element = <span>Hey there</span>

const Title = () => ( <h1 id="heading">
{element}
using Jsx Title
</h1>)

const HeadingComponent = () =>(
  <div>
  <h1>{number}</h1>
  {Title()}
  <Title/>
  <h1>react functional component</h1>
  </div>
)
// const HeadingComponent = () =>( <h1 className="Head">react functional component</h1> )


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
