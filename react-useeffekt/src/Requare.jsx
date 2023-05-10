import { BASE_URL } from "./BaseURL";


export async function getAllCategories({countSeach}) {
    console.log(countSeach);
    let globalData;
    await fetch(`${BASE_URL}/products?q=${countSeach}`)
    .then(response => response.json())
    .then(data => {
       globalData = data;
    })
    return globalData;
}



// post
export async function postCategory(post){
    await fetch(`${BASE_URL}/products`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(post)
    })
}


//delete category By ID 
export async function deleteCategoryByID(id){
    await fetch(`${BASE_URL}/products/${id}`,{
        method: 'DELETE'
    })
}

// //edit category by ID
// export async function editCategoryByID(id,updatedCategory){
//     await fetch(`${BASE_URL}/products/${id}`,{
//         method:'PUT',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(updatedCategory)
//     })
// }
