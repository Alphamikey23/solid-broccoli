import { useState } from "react";


export default function Button() {
    

    function handleClick() {
        const [count,setCount] = useState(0);
        setCount(count+1);
    }

    
    return(
        <>
        <button onClick={handleClick}>Click me</button>
        <button onClick={handleClick}>Click me</button>
        <h1> You have clicked the button {count} times</h1>
        </>
             

        
       
    
    )
}