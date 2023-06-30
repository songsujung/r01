import { useState } from "react";

const Todo1Input = ({changeView, addTodo}) => {

    const [todo, setTodo] = useState({title:''})

    return ( 
        <div className="w-full h-[90vh] bg-green-200">
            <div>Todo1 Input</div>
            <div>
                <input
                 className="m-3 p-3 bg-blue-300"
                 type='text'
                 name='title'
                 value={todo.title}
                 onChange={(e) => {
                    todo.title = e.target.value
                    setTodo ({...todo})
                }} ></input>
                <button 
                className="bg-blue-300 m-3 p-3 border-2"
                onClick={() => {
                    addTodo(todo)
                    setTodo({title:''})
                }}
                >
                    ADD Todo
                </button>
            </div>
        </div>
     );
}
 
export default Todo1Input;