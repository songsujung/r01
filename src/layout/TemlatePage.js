const TemplatePage = ({children}) => {

    console.log("children...........")
    console.log(children)

    const [header, main, footer] = children

    return (  
        <div className="w-100 bg-blue-500 justify-center item-center h-[100vh]">
            <div className="h-[20vh] bg-red-200">
                {header}
            </div>
            <div className="h-[60vh] bg-green-200">
                {main}
            </div>
            <div className="h-[20vh] bg-pink-200">
                {footer || <h1>small footer</h1>}
            </div>
        </div>
    );
}
 
export default TemplatePage;