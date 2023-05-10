

const SearchInput = (todos,setToDos,name , setName ,Price , setPrice) => {
    function handleSearch(e){
        // if(e.target.value.trim()==""){
        //   setNewProduct(newProduct)  
        // }
        // else{
          let aboutproduct = todos.filter((product)=>
          product.name.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())
          )
          setToDos(aboutproduct)
        // }
        
      }
  return (
    <>
   <input type="text" onChange={(e)=>handleSearch(e)} placeholder="Search!"/>
    </>
  )
}

export default SearchInput