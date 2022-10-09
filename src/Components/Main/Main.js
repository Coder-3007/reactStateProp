import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import styles from './Main.module.css';

function Main() {

  const [number,setNumber]= useState(0);
  const decrement = () => {setNumber (number - 1)};
  const increment = () => {setNumber (number + 1)};
  const String = "Mansoor";
  return(

    <Counter decrement ={decrement} increment = {increment} number={number} Mansoor = {String}/>
    
  );
}

export default Main;
