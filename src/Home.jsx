import React,{useEffect, useState, useContext, useRef} from 'react';
import {contex} from  "./App";

const Row = ()=>{
    const data= useContext(contex)

    const Element = useRef(null);
    
    useEffect(()=>{
        console.log(Element.current)
    },[])
    return(
        <div ref = {Element}> 
            {data}
        </div>
    )

}

const Home = () => {

    return (
    <div>
      <Row   />
    </div>
  )
}

export default Home