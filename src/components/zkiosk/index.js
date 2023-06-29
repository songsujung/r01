import { useState } from "react"
import ZCart from "./ZCart"
import ZProductList from "./ZProductList"

const ZKiosk = () => {

    const [items, setItems] = useState([])

    const buyProduct = (product) => {
        console.log("buy product", product)
        // 해당 상품이 카트에 있는가?
        const targetArr = items.filter(item => item.pno === product.pno)

        if(targetArr.length ===0){
            setItems([...items, {...product, qty:1}])
            return
        }
        targetArr[0].qty += 1
        setItems([...items])
        
    }

    const viewProduct = () => {
        console.log("view product")
    }

    const changeQty = (pno, amount) => {
        console.log("changeQty")

        const targetItem = items.filter(item => item.pno === pno)[0]
        targetItem.qty += amount

        if(targetItem.qty === 0){

            setItems(items.filter(item => item.pno !== pno))
            return
        }

        setItems([...items])
    }

    return ( 
        <>
            <ZProductList buyProduct={buyProduct} viewProduct={viewProduct}></ZProductList>
            <ZCart arr={items} changeQty={changeQty}></ZCart>
        </>
     );
}
 
export default ZKiosk;