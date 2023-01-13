import { useEffect, useState } from "react";
export default function Password(props){
const [username, setUsername] = useState("")
const [password, setpassword] = useState("")
function submitFunction(e){
    e.preventDefault()
    if (username == "1" &&
    password == "1"){
        alert("erfolgreich eingeloggt");
        props.setUser(true)
    }else alert("Falsche Log-in Daten")

}
    

useEffect(()=>{console.log(username)},[username])
useEffect(()=>{console.log(password)},[password])
    return(
        <form>
            <h2>Login</h2>
            <input type="text"  placeholder = "Enter your Username" onChange = {(e)=>{setUsername(e.target.value)}}></input>
            <input type="password"  placeholder = "Enter your Password" onChange={(e)=>{setpassword(e.target.value)}}></input>
            <p>{username}
        </p>
            <button className = "Submit" onClick={submitFunction}>Submit</button>
            
        </form>
    )



}