import { useState } from "react"
import ZCart from "./ZCart"
import ZProductList from "./ZProductList"

const ZKiosk = () => {

    const [items, setItems] = useState([])

    const buyProduct = (product) => {
        console.log("buy product", product)
    }

    const viewProduct = () => {
        console.log("view product")
    }

    const changeQty = () => {
        console.log("changeQty")
    }

    return ( 
        <>
            <ZProductList buyProduct={buyProduct} viewProduct={viewProduct}></ZProductList>
            <ZCart arr={items}></ZCart>
        </>
     );
}
 
export default ZKiosk;