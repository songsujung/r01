// props로 함수를 하나 받자!
const ZCountPanel = ({fn}) => {
    return ( 
    <div className="bg-gray-400 flex p-6">
        <button 
        onClick={() => fn(1)}
        className="m-6 p-2 bg-blue-300">
            INC
            </button>
        <button 
        onClick={() => fn(-1)}
        className="m-6 p-2 bg-blue-300">
            DEC
            </button>   
    </div>
     );
}
 
export default ZCountPanel;