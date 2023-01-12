import { useEffect, useState } from "react";

export default function NewAccount(){
const [newUsername, setNewUsername] = useState ("")
const [newPassword, setNewPassword] = useState ("")
const [compareNewPassword,setCompareNewPassword] = useState ("")
function createNewAccountFunction(e){
    if (newPassword == compareNewPassword){
        console.log("Super Du hast es geschafft zwei mal das selbe zu schreiben")
    }
    
    return(
        <form>
            <h2>Create a New Account</h2>
            <input type="text"  placeholder = "Enter your new Username" onChange={(e)=>{setNewUsername(e.target.value)}}></input>
            <input type="password"  placeholder = "Enter your new Password" onChange={(e)=>{setNewPassword(e.target.value)}}></input>
            <input type="password"  placeholder = "Enter your new Password again" onChange={(e)=>{setCompareNewPassword(e.target.value)}}></input>
            
            <button className="CreateNewAccount" onClick = {createNewAccountFunction} >Create a new Account</button>
            

        </form>



    )
}}