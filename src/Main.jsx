export default function Main(props){

return(
    <div> 
        Main!
        <button className="Logout" onClick= {()=>props.setUser(false)}>Logout</button>



    </div>
)




}