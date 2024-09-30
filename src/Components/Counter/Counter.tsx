'use client'

import { useState } from "react";

const Counter = () => {
    const [count,setCount]=useState <number>(0);

    return (
        <div className="text-center my-10 ">
      <h1>{count}</h1>
    <div className="flex justify-center items-center gap-5">
    <button className="px-5 py-2 bg-green-500 rounded-md" onClick={()=>setCount(count+1)}>+</button>
    <button  className="px-5 py-2 bg-orange-500 rounded-md" onClick={()=>setCount(count-1)}>-</button>
    </div>
        </div>
    );
};

export default Counter;