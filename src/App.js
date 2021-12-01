import React, { useState } from "react";

import Accordian from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Route from "./components/Route";
import Header from "./components/Header";



const items = [
    {
        title: "What is hooks in React?",
        content: "Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. ... You can also create your own Hooks to reuse stateful behavior between different components."


    },
    {
        title: "Why hooks are used in React? ",

        content: "Why hooks are used in React? What are Hooks? “Hooks are a new addition to React in version 16.8 that allows you use state and other React features, like lifecycle methods, without writing a class."
    },
    {
        title: "How hooks work in React?",
        content: "A Hook is a react function that lets you use state and react features from a function based component."
    }
]



const options = [
    {
        label: "the color is Red",
        value: "red"
    },
    {
        label: "the color is Green",
        value: "green"
    },
    {
        label: "the color is Blue",
        value: "blue"
    }

]





export default () => {

    const [selected, setSelected] = useState(options[0])
    



    return (<div>
        <Header/>
        
<Route path='/'>
    <Accordian items={items}/>
</Route>
<Route path='/list'>
    <Search/>
</Route>
<Route path='/dropdown'>
    <Dropdown label='select a color'
    options={options}
    selected={selected}
    onSelectedChange={setSelected}/>
</Route>
       

        
        
    </div>)


   
    
};
