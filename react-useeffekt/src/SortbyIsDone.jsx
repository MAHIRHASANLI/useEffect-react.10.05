

const SortbyIsDone = (todos,setToDos,Name,show, setShow) => {
    function handeSort(){
        let array=[]
        todos.map((item)=>{
            if(item.show===true){
                array.push(item)}
            })
       
            let sortShow = array.sort((a,b)=> a.Name - b.Name)
            setToDos(sortShow)
      
      }
  return (
    <button className="btn " onClick={handeSort} type="submit">Sort</button>
  )
}

export default SortbyIsDone