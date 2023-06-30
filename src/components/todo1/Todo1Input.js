import { useState } from "react";

const Todo1Input = ({addTodo}) => {

  const [todo, setTodo] = useState({title: ''})

  return (
    <div className="w-full bg-green-300">
      <div>Todo1 Input</div>
      <div>
        <input
          className="m-3 p-3 bg-blue-300"
          type="text"
          name="title"
          value={todo.title}
          onChange={(e) => {
              todo.title = e.target.value
              setTodo({...todo})
            }
          }
        />
        {/* 클릭하면 index쪽으로 전달되어야 함 그래서 함수는 index에서 선언 */}
        <button
          className="bg-blue-300 m-3 p-3 border-2 border-black rounded-lg"
          onClick={() => {
            addTodo(todo)
            setTodo({title: ''})
          }}
        >
          ADD Todo
        </button>
      </div>
    </div>
  );
}

export default Todo1Input;