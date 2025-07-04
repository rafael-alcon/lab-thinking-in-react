import { useState } from "react"
function SearchBar({products, setProducts, allProducts}){
    
    const [searchValue, setSearchValue] = useState("")
    const filtering = (e)=> {
    const textInput = e.target.value
    let checkedValue = document.getElementById("checking").checked
    const filteredData = allProducts.filter((product)=> product.name.toLowerCase().startsWith(textInput) && (product.inStock || !checkedValue))
   
    setProducts(filteredData)
    setSearchValue(textInput)
    
    }  
   
    return(
        <>
            <p>Search</p>
            <input onChange={filtering} value={searchValue}></input><br/>  
            <input type="checkbox" name="checkedMark" id="checking"></input>
            <label htmlFor="checkedMark">Only show Products in store</label>          
        </>
    )    
}
export default SearchBar