import { useEffect, useState } from "react";

export default function NewAccount() {
    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [compareNewPassword, setCompareNewPassword] = useState("")
    function createNewAccountFunction(e) {
        e.preventDefault()


        if (newPassword === compareNewPassword && newUsername.length >= 6 && newPassword.length >= 6) { alert("Great, You followed the Instructions. Good :)") }
        else if (newUsername.length >= 6 && newPassword.length >= 6) { alert("The passwords are not the same") }
        else if (newPassword === compareNewPassword) {
            alert("The Username must be atleast 6 characters long")
            alert("The Password must be atleast 6 characters long")
        }
        else {alert("Username must be at least 6 characters long, password as well, the passwords are not the same")}
    }

    return (
        <form>
            <h2>Create a New Account</h2>
            <input type="text" placeholder="Enter your new Username" onChange={(e) => { setNewUsername(e.target.value) }}></input>
            <input type="password" placeholder="Enter your new Password" onChange={(e) => { setNewPassword(e.target.value) }}></input>
            <input type="password" placeholder="Enter your new Password again" onChange={(e) => { setCompareNewPassword(e.target.value) }}></input>

            <button className="CreateNewAccount" onClick={createNewAccountFunction} >Create a new Account</button>


        </form>



    )
}