import { useState } from "react"


const DeleteToDo = (todos,setToDos) => {
    function handleDelete(name){
        let filterProduc=todos.filter((product)=>product.name!==name)
        setToDos(filterProduc)
     }
  return (
    <button className="btn btn-danger" onClick={()=>handleDelete(todos.name)}>Delete</button>
  )
}

export default DeleteToDo