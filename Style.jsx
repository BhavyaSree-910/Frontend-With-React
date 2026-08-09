import React from "react";
function Style(){
    return(
        <div>
            <h1 style={{ color:"blue",fontSize:"50px"}}>Hey I have styled this using inline </h1>
            <h2 className="head2">It was styled using external CSS</h2>
        </div>
    )
}
export default Style;
