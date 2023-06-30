const Todo1List = ({requestView, todos}) => {
    return (
      <div className="w-full bg-blue-300">
        <div>Todo1 List</div>
        {/* 4번 */}
  
        <ul>
          {todos.map( t =>
            <li 
              key={t.tno}
              onClick={() => requestView(t.tno)}
            >
              {t.tno} - {t.title}
            </li>
          )}
        </ul>
  
      </div>
    );
  }
  
  export default Todo1List;