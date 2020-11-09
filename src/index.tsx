import * as React from "react";
import * as ReactDOM from 'react-dom';
import Header from './header';
import CustomDate from "../custom-date";
import FruitLoops from "./fruit-loops";

let fruit : Array<string> = [
  'red', 'green', 'blue', 'yellow', 'pink', 'brown'
]

ReactDOM.render(
  <div>
    <Header text='Satisfied'/>
    <CustomDate />
    <FruitLoops fruit={fruit} />
    <p> This is a paragraph</p>
    <a href='#'>Click Me</a>
  </div>,
  document.querySelector('#root')
)