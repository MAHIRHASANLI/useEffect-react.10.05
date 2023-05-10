import { useState } from "react"


const DoneToDo = (todos,setToDos,show,setShow) => {
  
  return (
    <button onClick={()=>setShow(show=>!show)}>{show?"Done" : "isDone"}</button>
  )
}

export default DoneToDo