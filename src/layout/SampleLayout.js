const SampleLayout = ({children}) => {
    return ( 
        <div className="bg-blue-500 m-12 w-full h-[2vh]">
            <div className="h-[10vh] bg-red-400"></div>
            {children}
        </div>
     );
}
 
export default SampleLayout;