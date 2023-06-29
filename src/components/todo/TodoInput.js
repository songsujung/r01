import { useState } from "react";

const TodoInput = () => {

    const [value, setValue] = useState({title:'', content:''})

    return ( 
        <>
        <div>
            <label>제목</label>
        <input 
        className="border-8" 
        type='text' 
        value={value} 
        onChange={e => setValue(e.target.value)}/>
        </div>
        <div>
            <label>내용</label>
        <input 
        className="border-8" 
        type='text' 
        value={value} 
        onChange={e => setValue(e.target.value)}/>
        </div>
        </>
     );
}
 
export default TodoInput;