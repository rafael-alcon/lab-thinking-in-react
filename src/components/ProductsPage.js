import { useState } from "react"
import jsonData from "../data.json"
import "./SearchBar"
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"
function ProductPage(){
    const [products, setProducts] = useState(jsonData)
    
    
    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar products={products} setProducts={setProducts} allProducts={jsonData}/>
           
            <ProductTable products={products}/>
        </div>
    )
}
export default ProductPage