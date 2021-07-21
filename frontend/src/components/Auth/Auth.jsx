import React, { useState } from 'react';
import axios from 'axios';
import {Input, Button} from 'antd';
import { useHistory } from 'react-router';

export default function Auth(props){

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    const history = useHistory();
    const page = props.pageName === "login"?"login":"register";

    function handleChange(event){
        const value = event.target.value;
        const name = event.target.name;

        if(name === "email"){
            setEmail(email = value);
        }else if(name === "password"){
            setPassword(password = value);
        }else{
            setConfirmPassword(confirmPassword = value);
        }
    }

    async function handleSubmit(event){
        event.preventDefault();
        const user = {
            email: email,
            password: password,
        }
        try{
            console.log(__dirname);
            //  +props.pageName === "login"?"login":"register"
            await axios.post("http://localhost:4000/"+page, user, {withCredentials: true}).then(res=>{
                if(res.data === true){
                    props.handleLogin(true); 
                    history.push("/secret");
                }
            });
        }catch(e){
            console.log(e);
        }
        console.log(event);
    }

    return(
        <div className="auth">
            <form onSubmit={handleSubmit}>
                <Input size="large" type="email" name="email" onChange={handleChange} value={email} placeholder="Email address"/>
                <Input size="large" type="password" name="password" onChange={handleChange} value={password} placeholder="Password"/>
                {
                    props.pageName === "login"? null: <Input size="large" type="password" name="passwordConfirm" onChange={handleChange} value={confirmPassword} placeholder="Confirm Password"/>    
                }
                <button type="submit">{props.pageName === "login"? "Log-in": "Register"}</button>
            </form>
        </div>
    );
}