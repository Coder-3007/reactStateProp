import React,{useState} from 'react';
import styles from '../Counter/Counter.module.css'

function Counter(props) {
    


    return (
      <div  className={styles.manDiv}  >
        <button onClick={props.decrement}>-</button>
        <h1>{props.number}</h1>
        <button onClick={props.increment} >+</button>
        <h1>{props.Mansoor}</h1>
      </div>
    
  );
}

export default Counter