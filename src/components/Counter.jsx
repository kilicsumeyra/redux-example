import React from 'react'
import "./Counter.css";
import { useDispatch, useSelector } from 'react-redux';
import {decrement,clear, increment} from "../redux/actions/counterAction";
function Counter() {
    const dispatch= useDispatch();

    const{counter}=useSelector((state)=> state.count)
  return (
    <div>
<h2 className="counter-header">Counter With Redux</h2>
      <h3>{counter}</h3>
      <div>
        <button className="counter-button positive"
        onClick={()=>dispatch(increment())}
        >Increase</button>
      </div>
      <div>
        <button className="counter-button zero"
        onClick={()=>dispatch(clear())}
        >Clear</button>
      </div>
      <div>
        <button className="counter-button negative"
      onClick={()=>dispatch(decrement())}
        >Decrease</button>
      </div>
    </div>
  )
}


export default Counter
