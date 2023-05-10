import DoneToDo from "./DoneToDo"
import DeleteToDo from "./DeleteToDo"
const ToDoItem = ( todos,setToDos,show,setShow) => {
  return (
    <ul className="ul">
    {todos && todos.map((data) => {
        return <li className="product" key= {data.Name}>{data.Name} 
        <DoneToDo show={show} setShow={setShow} todos={todos} setToDos={setToDos}></DoneToDo>
        <DeleteToDo todos={todos} setToDos={setToDos}></DeleteToDo></li>
 })}
  </ul>
  )
}

export default ToDoItem