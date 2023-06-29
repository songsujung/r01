import ZCartItem from "./ZCartItem";

const ZCart = ({arr, changeQty}) => {

    console.log("arr", arr)

    return ( 
        <div>
            <ul>
                {arr.map((cartItem, idx) => 
                <li key={idx}>
                    <ZCartItem {...cartItem} changeQty = {changeQty}></ZCartItem>
                </li>)}
            </ul>
        </div>
     );
}

 
export default ZCart;