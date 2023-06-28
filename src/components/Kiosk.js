
const products = [
    {pno: 1, pname:'Americano', price: 7000},
    {pno: 2, pname: 'Cocoa', price: 6000},
    {pno: 3, pname:'Milk Tea', price: 9000},
    {pno: 4, pname:'Latte', price: 5000}
]

const Kiosk = () => {

    const handleClickBuy = (product) => {
        console.log(product)
    }

    return ( 
        <div className="w-full h-[100vh] bg-blue-300 flex"> 
            <div className="w-2/3 bg-white">
               <div className="text-4xl font-extrabold">products</div> 

               <ul>
                {products.map( p => 
                    <li 
                    key = {p.pno}
                    className="text-2xl underline m-3 p-3 bg-red-200"
                    onClick={() => {handleClickBuy(p)}}
                    >
                        {p.pno} - {p.pname} - {p.price}
                        <button className="border-2 m-2 p-2 rounded-sm border-blue-300">BUY</button>
                    </li>)}
               </ul>
            </div>
            <div className="w-1/3">
                <div className="text-4xl font-extrabold">Cart</div> 
            </div>
        </div>
     );
}
 
export default Kiosk;