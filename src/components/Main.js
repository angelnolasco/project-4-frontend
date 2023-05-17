import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props) {
    
  const [mountain, setMountain] = useState(null)

  const URL = "http://localhost:4000/mountain/"

  const getMountain = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setMountain(data)
  }

  const createMountain = async (hike) => {
    await fetch(URL,{
       method: "POST",
       headers: {
         "Content-Type" : "Application/json",
        },
       body: JSON.stringify(hike)
    })
     getMountain()
    }

  const updataMountain = async(hike,id) => {
    await fetch(URL + id,{
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(hike)
    })
     getMountain()
   }

  const deleteMountain = async id => {
    await fetch(URL + id,{
        method: "DELETE",
    })
     getMountain()
   }

    useEffect(() =>{
        getMountain()
    },[])

    return(
        <Routes>
            <Route exact path="/" element= {<Index mountain={mountain} createMountain={createMountain}/>} />
            <Route exact path="/mountain/:id" element= {<Show mountain={mountain} updataMountain={updataMountain} deleteMountain={deleteMountain}/>}/>
        </Routes>
    )   
}

export default Main