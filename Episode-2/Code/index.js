import React from "react";
import ReactDOM from "react-dom";
//creating nested html tags
{/* <div id="parent">
    <div id="child 1">
        <h1>H1 tag 1</h1>
        <h1>H1 tag 2</h1>
    </div>
    <div id="child 2">
        <h1>H1 tag 1</h1>
        <h1>H1 tag 2</h1>
    </div>
</div> */}

// React.createElement(object) => HTML(browser understandable)

const parent = React.createElement("div",{id:"parent"},
        [React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"H1 tag 1"),
            React.createElement("h1",{},"H1 tag 2")]),
        React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"H1 tag 1"),
            React.createElement("h1",{},"H1 tag 2")])
        ]);
const heading = React.createElement("h1",{id:"heading"},"Hello World From React");// react object


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);// coverts react object to html for browser to render
root.render(parent);

