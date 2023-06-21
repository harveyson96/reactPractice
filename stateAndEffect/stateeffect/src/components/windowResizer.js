import React, {useEffect, useState} from "react";

const WindowResizer = () =>{
    // provide a default value 
    let [width, setWidth] = useState(window.innerWidth || 0)
useEffect(()=>{
   setWidth(window.innerWidth)
   const handleResize = () =>{
    //setup a timer to delate the state update
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() =>{
        setWidth(window.innerWidth);
    }, 200)
   }
   let resizeTimer;
   window.addEventListener("resize" , handleResize)
   return () =>{
    window.removeEventListener("resize", handleResize)
   }
}, [])
    return(
        <div id='practice3'>
            <label>{width}</label>
        </div>
    )
}

export default WindowResizer;