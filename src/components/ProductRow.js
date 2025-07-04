function ProductRow(props){
    const {products} =props
        
 return(
    <>
       {
        products.map((product, index)=>{
            return(
                <tr key={index}>
                    <td style={{color: product.inStock? "black": "red"}}>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )
        })
       }
    </>
 )
}
export default ProductRow