import React from "react";
import { useState } from "react";
function Formvalidation(){
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const[branch,setbranch]=useState("");
    const validate = () => {    
        if(name.trim() === ""){
            alert("Name is required");
            return false;
        }
        if(email.trim() === ""){
            alert("Email is required");
            return false;
        }
        if(branch.trim() === ""){
            alert("Branch is required");
            return false;
        }   
        return true;
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validate()){
            console.log("Name:",name);
            console.log("Email:",email);
            console.log("Branch:",branch);
        }
    };
    return(
        <div>
            <h1>Formvalidation</h1>  
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setname(e.target.value)} 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setemail(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Branch" 
                    value={branch} 
                    onChange={(e) => setbranch(e.target.value)} 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}           
export default Formvalidation;