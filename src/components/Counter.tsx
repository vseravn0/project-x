import { useState } from "react";
import classes from './Counter.module.scss'

const Counter = () => {

    const [count,setCount] = useState(0);
    return (
        <div>
            <span>{count}</span>
            <button className={classes.btn} onClick={() => setCount(prevState => ++prevState)}>click</button>
        </div>
    )
}

export default Counter