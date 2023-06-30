const Todo1List = ({changeView}) => {
    return ( 
        <div className="w-full h-[90vh] bg-blue-200">
            <div>Todo1 List</div>
            <button onClick={() => changeView("input")}>INPUT</button>
        </div>
     );
}
 
export default Todo1List;