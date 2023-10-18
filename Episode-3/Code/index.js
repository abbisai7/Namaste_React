import React from 'react';
import ReactDOM from 'react-dom';


//React.createElement->React Element(a js object)->HTML Element(on render)
const heading = React.createElement("h1",{id:"heading"},"Hello World")


//JSX->React.createElement(babel)->React Element-js object->HTML ELement(render)
// JSX is HTML like or XML like syntax
// JSX and HTML differes in attribute naming
// class in HTML, className in JSX
// JSX is diferent and React is different

const jsxHeading = (<h1 id="heading">Hello World JSX</h1>);


// React Components

const Title = ()=> (
    <h1 id="title">Namaste React</h1>
);

// const Heading = function (){
//     return(
//     <div id="heading">
//         <Title/> 
//         <h1>Namaste React Functional Components</h1>
//     </div>
//     )   
// }; 

const span = <span><h1>React ELement</h1></span>;

const number = 100000
// const Heading = ()=> {
//     return(
//     <div>
//         <h2>{number+2000}</h2>
//         <Title/> 
//         {Title()}
//         {span}
//         <h1 id="heading">Namaste React Functional Components</h1>
//     </div>
//     )   
// }; 

const Heading = () => (
    <div>
        <h2>{number+2000}</h2>
        <Title/> 
        {Title()}
        {span}
        <h1 id="heading">Namaste React Functional Components</h1>
    </div>
);   
 


// Create Root
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading)

//root.render(jsxHeading)

root.render(<Heading/>);