import React from "react";
function Child({ handleClick }) {
    console.log("Child component rendered");  
    return (
        <div>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}
export default Child;