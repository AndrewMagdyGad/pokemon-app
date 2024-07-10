import "./counter.styles.css";
import { useState } from "react";

// re-rendering

function Counter() {
    const [counter, setCounter] = useState(0);

    const handlePlusClick = () => {
        setCounter(counter + 1);
    };

    const handleMinusClick = () => {
        setCounter(counter - 1);
    };

    return (
        <div className="container">
            <button className="btn" onClick={handlePlusClick}>
                +
            </button>
            <span className="counter">{counter}</span>
            <button className="btn" onClick={handleMinusClick}>
                -
            </button>
        </div>
    );
}

export default Counter;
