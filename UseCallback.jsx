import { useState, useCallback } from "react";
import Child from "./Child";
function UseCallback() {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log("Button clicked");
    }, []);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>

            <Child handleClick={handleClick} />
        </div>
    );
}
export default UseCallback;