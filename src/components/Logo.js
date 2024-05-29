import React, { useState,useEffect } from "react";
import '../App.css'


function handelToggle(mode,colour){
    const con=document.getElementsByClassName("questionContainer");
    
    con[0].style.backgroundColor=`${mode}`;
    con[0].style.color=`${colour}`;
}



export default function Logo(){
    const [mode,setmode]=useState("white");
    const [colour,setColour]=useState("black");
    useEffect(()=>{handelToggle(mode,colour)})
    return(
        <div className='logocontainer'>
            <h2 className='logo'>Kalvium</h2>
            <h2 className='toggle'onClick={()=>{
                if(mode==="white" && colour==="black"){
                    setmode("black");
                    setColour("white");
                }else{
                    setmode("white");
                    setColour("black");
                }

                handelToggle(mode,colour)
            }}>{mode==="white"?"dark Mode":"light Mode"}</h2>
        </div>
    )
}