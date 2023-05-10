import { useState, useEffect } from "react"
import {getAllCategories,deleteCategoryByID,postCategory} from "./Requare"
import { v4 as uuidv4 } from 'uuid';

export const Task1 = () => {
let [countFilms, setCountFilms] = useState([])
let [countSeach, setCountSearch] = useState("")

useEffect(()=>{
    getAllCategories({countSeach}).then(data=>setCountFilms(data))
    
},[countSeach])

function handleChange(e){
    setCountSearch(e.target.value)
}
function unitPriceClick(e){
    let sortData= countFilms.sort((a,b)=>a.unitPrice - b.unitPrice)
    setCountFilms([...sortData])
}
function discountedClick(e){
    let array=[]
    countFilms.map((item)=>{
        if(item.discontinued===true){
            array.push(item)}
        })
        let sortDiscounted = array.sort((a,b)=> a.unitPrice - b.unitPrice)
        setCountFilms([...sortDiscounted])
}
    let [post, setPost] = useState({name:"",unitPrice:"",discontinued:""})
    let [error,seterror] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        if(post.name.length < 1 || post.unitPrice < 0){
            seterror("Bosh gondermiyin!")
        }
        else{
            seterror("")
        setPost.id = uuidv4()
        setCountFilms([...countFilms,post])
        postCategory({post})
        setPost({name:"",unitPrice:""})
        }
}
function hanleCheng(e){
    setPost({...post,[e.target.name]:e.target.value})
}
  return (
    <>
    <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <p>Add New Product</p>
       <div className="formInput" > 
       <input name="name" type="text" value={post.name} placeholder=" Name" onChange={(e)=>hanleCheng(e)}/>
        <input name="unitPrice" type="number" value={post.unitPrice} placeholder="unitPrice" onChange={(e)=>hanleCheng(e)}/>
        <input name="discontinued" value={true} type="checkbox"  onClick={(e)=>hanleCheng(e)}/><label htmlFor="">isDiscounted</label>
        </div>
        <p>{error}</p>
        <button >Add</button>
    </form>
    <hr></hr>
    <i className="fa-solid fa-magnifying-glass"></i>
    <input type="text" onChange={(e)=>handleChange(e)} className="form-control" />
   <div className="buttonlarim">
   <button className="buttonSorted" onClick={(e)=>unitPriceClick(e)}>Sort unitPrice </button>
    <button  className="buttonSorted" onClick={(e)=>discountedClick(e)}> is discounted</button>
   </div>
    <ul className="ullerim">
        {
            countFilms && countFilms.map((data)=>{
            return <li className="lilerim my-2" key={data.id}>|{data.name}   |   {data.unitPrice} 
                <button className="buttondelete" onClick={()=>{
                if(window.confirm("Do you really want to delete?")){
                    let filteredCategories = countFilms.filter((item)=>item.id!==data.id);
                    deleteCategoryByID(data.id);
                    setCountFilms(filteredCategories)
                }
              }}>Delete</button></li>
            })
        }
    </ul>
    </>
  )
}
