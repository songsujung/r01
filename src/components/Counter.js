import { useState } from "react"

const Counter = () => {

    console.log("render......................")

    const [num,setNum] = useState(1) // 시작 값을 1로 지정

    const handleClick = (amount) => {
        
        setNum(num + amount) // 변경되는 값은 set으로 시작

        console.log("click", num)
    }

    return ( 
        <div className="w-full bg-blue-900 h-1/2">
            <div className="text-5xl text-white">
                {num}
            </div>
            <button className=" w-10 bg-emerald-500 text-white font-bold" onClick={() => handleClick(1)}>
                INC
            </button>
            <button className=" w-10 bg-emerald-500 text-white font-bold ml-10" onClick={() => handleClick(-1)}>
                DEC
            </button>
        </div>
     );
}
 
export default Counter;