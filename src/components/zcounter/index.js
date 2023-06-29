import { useState } from "react";
import ZCountDisplay from "./ZCountDisplay";
import ZCountPanel from "./ZCountPanel";

const ZCounter = () => {

    const target = {
        p1:'A',
        p2:'B',
        p3:'C',
        p4:'D'
    }

    const [obj, setObj] = useState({num:10}) // 상태 (초기값)

    const changeObj = (amount) => { // obj값 변경
        obj.num += amount
        setObj({...obj}) // 새로운 객체 생성
    }

    // setInterval(() => {
    //     changeObj(1)
    // }, 3000) // 3초마다 1씩 증가

    return (  
        <div>
            <ZCountDisplay value={obj.num}/>
            <ZCountPanel fn={changeObj}/>
        </div>
    );
}
 
export default ZCounter;