import { useState } from "react";

const Counter2 = () => { // 객체스타일로 코딩

    const [obj, setObj] = useState({num:10})

    return ( 

        <div>
            {obj.num}
            <button onClick={() => {

                obj.num += 1

                console.log(obj.num) // 객체가 변경되지 않아서 값만 변경되고, 화면상 값은 변하지 않음

                // setObj(obj) // obj는 처음에 선언된 값과 같아서 화면상 값을 변경해주지 않음, 새로운 객체를 만들어줘야만 변경
                // setObj({num: obj.num}) // 변경되나 값이 많아지면 번거로워질 수 있음. spreadOperator 사용으로 해결
                setObj({...obj}) // spreadOperator
            }}>INC</button>
        </div>
     );
}
 
export default Counter2;