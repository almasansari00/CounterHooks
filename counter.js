import React, {useEffect, useState} from 'react'

function Counter(){
    const [count, setCount]= useState(0)
 
    useEffect(() => {
                if(count === 0) {
                    document.getElementById("count").style.color = `Black`;
                }else if(count < 0) {
                    document.getElementById("count").style.color = `red`;
                }else{
                    document.getElementById("count").style.color = `green`;
            }
        }, [count]);
    return (
        <div>
            <h1>Counter</h1>
            <h2 id="count">{count} </h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>RESET</button>
        </div>
    )
    }
export default Counter;