import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1",
// { id:"heading"},
// "Hey There");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" },[
  React.createElement("div",{ id: "child" },[
    React.createElement("h1", {}, "I am heading"),
    React.createElement("h2", {}, "I am heading2"),
  ]),
  React.createElement("div",{ id: "child2" },[
    React.createElement("h1", {}, "I am heading"),
    React.createElement("h2", {}, "I am heading2"),
  ]), 

]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
