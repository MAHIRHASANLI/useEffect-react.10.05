import { useState } from "react"


const DeleteToDo = (todos,setToDos) => {
    function handleDelete(Name){
        let filterProduc=todos.filter((product)=>product.Name!==Name)
        setToDos(filterProduc)
     }
  return (
    <button className="btn btn-danger" onClick={()=>handleDelete(todos.Name)}>Delete</button>
  )
}

export default DeleteToDo