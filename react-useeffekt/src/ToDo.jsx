import AddToDo from "./AddToDo"
import SearchInput from "./SearchInput"
import SortbyIsDone from "./SortbyIsDone"
import ToDoItem from "./ToDoItem"
import { useState } from "react"


const ToDo = () => {
    let [ todos,setToDos] = useState([1,2,3])
    let [show, setShow] = useState(false)
    let [name , setName] = useState("")
  return (
      <div>  <div>
        <SearchInput  todos={todos} setToDos={setToDos}></SearchInput>
      <SortbyIsDone show={show} setShow={setShow} todos={todos} setToDos={setToDos}></SortbyIsDone>
      </div>
<ToDoItem show={show} setShow={setShow} todos={todos} setToDos={setToDos}></ToDoItem>
   
    <AddToDo name={name} setName={setName} todos={todos} setToDos={setToDos}></AddToDo>
    </div>
  )
}

export default ToDo
