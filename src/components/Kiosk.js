import { useState } from "react"

const products = [
    {pno: 1, pname:'Americano', price: 7000, img:"/Americano.jpeg"},
    {pno: 2, pname: 'Latte', price: 6000, img: 'Latte.jpeg'},
    {pno: 3, pname:'Ade', price: 9000, img: 'Ade.jpeg'},
    {pno: 4, pname:'Smoothie', price: 5000, img: 'Smmothie.jpeg'}
]

const getTotal = (arr) =>{
    
    if(!arr || arr.length === 0){
        return 0
    }
    let sum = 0;

    for(const ele of arr){
        sum += (ele.price * ele.qty)
    }
    return sum
}

const Kiosk = () => {

    const [items, setItems] = useState([])

    const handleClickBuy = (product) => {
        console.log({...product, qty:1})

        const result = items.filter( ele => ele.pno === product.pno )

        console.log("result", result)

        if(result.length === 0){
            setItems([...items, {...product, qty:1}])
            return
        }

        const cartItem = result[0]
        cartItem.qty += 1
        setItems([...items])

    }

    const handleClickQty = (pno, amount) => {
        console.log("pno", pno, "amount", amount)

        const target = items.filter(item => item.pno === pno)[0]

        console.log(target)

        // increse
        if(amount === 1){
            target.qty += 1
            setItems([...items])
        }else {

            if(target.qty === 1){
                setItems( items.filter(ele => ele.pno !== pno) )
            }else {
                target.qty -= 1
                setItems([...items])
            }
        }
    }

    return ( 
        <div className="w-full h-[100vh] bg-white flex"> 
            
            <div className="w-2/3 bg-white">
                <div className="w-1/6">
                    <img src="/logo.png"/>
                </div>
               <div className="text-4xl text-orange-950 font-extrabold">products</div> 

               <ul className="flex">
                {products.map( p => 
                    <li
                    key = {p.pno}
                    className="text-2xl underline m-3 p-3 rounded-lg bg-blue-300"
                    onClick={() => {handleClickBuy(p)}}
                    >
                        <img src={require(`../image/c0${p.pno}.jpeg`)} /> {p.pname} {p.price}
                        <button className="border-2 m-2 p-2 rounded-lg border-blue-500">BUY</button>
                    </li>)}
               </ul>
            </div>
            <div className="w-1/3">
                <div className="text-4xl text-orange-950 font-extrabold">Cart</div> 

                <ul className="bg-gray-300">
                    {items.map( (item,idx) => 
                    <li key={idx} className="border-2">
                        <div className="flex text-3xl text-white m-4 p-4">
                            <div>{item.pno}</div>
                            <div>{item.pname}</div>
                            <div>{item.price}</div>
                        </div>
                        <div className="flex justify-center text-2xl">
                            <button className="m-1 rounded-lg bg-white p-4"
                            onClick={() => handleClickQty(item.pno , 1)}
                            >+</button>
                            <p className="m-2 p-2">{item.qty}</p>
                            <button className="m-1 rounded-lg bg-white p-4"
                            onClick={() => handleClickQty(item.pno , -1)}
                            >-</button>
                        </div>
                    </li> )}
                </ul>
                <div className="bg-blue-950 text-white text-5xl ">
                    TOTAL {getTotal(items)}
                </div>
            </div>
        </div>
     );
}
 
export default Kiosk;