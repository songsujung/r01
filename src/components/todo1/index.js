import { useState } from "react";
import Todo1List from "./Todo1List";
import Todo1Input from "./Todo1Input";
import Todo1Read from "./Todo1Read";
import uuid from 'react-uuid'

const Todo1 = () => {

    const [cmd, setCmd] = useState("list")
    const [todos, setTodos] = useState([])

    const changeView = (str) => {
        setCmd(str)
    }

    const addTodo = (todoObj) => {

        console.log( uuid(), todoObj)

        setTodos([...todos, {tno:uuid(), ...todoObj}])
        setCmd('list')
    }

    const getView = () => {
        
        if(cmd === 'list'){
            return <Todo1List changeView={changeView}></Todo1List>
        }else if(cmd === 'input'){
            return <Todo1Input changeView={changeView} addTodo={addTodo}></Todo1Input>
        }else if(cmd === 'read'){
            return <Todo1Read changeView={changeView}></Todo1Read>
        }
    }

    return ( 
        <>
        <div className="text-5xl">Todo 1</div>
        <div>
            {getView()}
        </div>
        </>
     );
}
 
export default Todo1;