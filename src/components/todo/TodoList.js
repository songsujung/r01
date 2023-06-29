const TodoList = ({arr, removeFn}) => {
    return ( 
        <div>
        TodoList
        <ul>
            {arr.map(todo => <li className="m-3 text-3xl p-3" key={todo.tno}>{todo.tno} - {todo.title} 
            <button 
            className="bg-red-300"
            onClick={() => removeFn(todo.tno)}>DEL</button>
            </li>)}
        </ul>

        </div>
     );
}
 
export default TodoList;