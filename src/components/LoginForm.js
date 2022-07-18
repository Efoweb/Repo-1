import { Component, useState } from "react";

export default function LoginForm(){

    let [username, updateUsername] = useState("");
    let [password, updatePassword] = useState("");

    function handleChangeUsername(event){
        updateUsername(event.target.value);
    }

    function handleChangePassword(event){
        updatePassword(event.target.value);
    }

    function submit(){
        console.log(username, password);
    }


    return<>
        <input type="text" value={username} onChange={handleChangeUsername} placeholder="enter username"/><br></br>
        <input type="password" value={password} onChange={handleChangePassword} placeholder="enter password"/><br></br>
        <button onClick={submit}>Login</button>
    </>
}