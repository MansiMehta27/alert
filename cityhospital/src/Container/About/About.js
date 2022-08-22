import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '../../Redux/Action/Counter.action';
function About(props) {
    const dispach = useDispatch();
    const c = useSelector(state=>state.counter)

    const handleIncrement=()=>{
            dispach(incrementCounter())
    }
    const handleDecrement=()=>{
        dispach(decrementCounter())
    }
    return (
        <div className='container'>
                    <button className='mt-5' onClick={()=>handleIncrement()}>+</button>
                    <p>{c.counter}</p>
                    <button onClick={()=>handleDecrement()}>-</button>
        </div>
    );
}
export default About;