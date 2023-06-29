const products = [
    {pno: 1, pname:'Americano', price: 7000, img:"/Americano.jpeg"},
    {pno: 2, pname: 'Latte', price: 6000, img: 'Latte.jpeg'},
    {pno: 3, pname:'Ade', price: 9000, img: 'Ade.jpeg'},
    {pno: 4, pname:'Smoothie', price: 5000, img: 'Smmothie.jpeg'}
]

const ZProductList = ( {buyProduct, viewProduct}) => {

    console.log("buyproduct" , buyProduct)

    return ( 
        <div className="w-full bg-indigo-500 text-3xl m-12 p-10">
            <ul>
                {products.map(p =>
                    <li key={p.pno}>
                    {p.pname}
                      <button 
                      className="bg-red-400" 
                      onClick={() => {buyProduct({...p})}}
                      >BUY</button>
                </li>)}
            </ul>
        </div>
     );
}
 
export default ZProductList;