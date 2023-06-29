import { useState } from "react";

// 깨끗한 코드
const initState = {title:'' , content:''}

const TodoInput = () => {

    // 재사용 하고 싶어서 initState 라고 만들고 따로 분리 
    const [obj,setObj] = useState(initState)

    const handleChange = (e) => {
        // const prop = e.target.name
        // const str = e.target.value

        // obj[prop] = str

        obj[e.target.name] = e.target.value

        setObj({...obj})
    }

    // show를 누르면 로그창에 obj 
    const handleShow = () => {
        console.log(obj)
    }

    // claer
    const handleClear = () => {
        setObj({...initState})
    }

    return ( 
        <>
            <div>
                <label>제목</label>
                <input 
                className="border-8" 
                type='text'
                name='title'
                value={obj.title} 
                // input 태그를 사용하기 위한 이벤트
                onChange={handleChange}/>
            </div>
            <div>
                <label>내용</label>
                <input
                className="border-8" 
                type='text'
                name='content'
                value={obj.content} 
                onChange={handleChange}/>
            </div>
            <div>
            <button onClick={handleShow}>
                Show
            </button>
            <button onClick={handleClear}>Clear</button>
            </div>
            
        </>
     );
}
 
export default TodoInput;