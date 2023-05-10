import { useState } from "react"

const AddToDo = (todos,setToDos,name,setName) => {
   
    
  let [countError, setCountError] = useState("")
  function formSubmit(e){
    e.preventDefault()
    if(name.length < 3){
        setCountError("Bos mesaj daxil edirsiz!")
    }
    else{
        setToDos([...name]);
      setName("");
}
  }
  function formAdd(e){
    setName(e.target.value)
    if(e.target.value.length < 6 || !/[A-Z]/.exec(name[0])) {
        setCountError("Daxil etdiyiniz melumatin duzgunluyunnen emin olun!")
    }
    else{
        setCountError("");
      }}
  return (<form onSubmit={(e)=>formSubmit(e)} action="">
      <input name="name" onChange={(e)=>formAdd(e)} value={name} type="text" placeholder="Enter ToDo"  />
        <button className="btn ">Add</button>
      <p className="pp">{countError}</p>
      </form>
        
      
  )
}

export default AddToDo