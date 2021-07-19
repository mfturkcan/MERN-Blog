import React, { useState } from 'react';
import axios from 'axios';
import querystring from 'querystring';
import { useHistory } from 'react-router';

export default function Auth(props){

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    const history = useHistory();

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
            await axios.post("http://localhost:4000/register", user, {withCredentials: true}).then(res=>{
                if(res.data === true){ history.push("/secret");}
            });
        }catch(e){
            console.log(e);
        }
        console.log(event);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="email" onChange={handleChange} value={email}/>
                <input name="password" onChange={handleChange} value={password}/>
                {
                    props.pageName === "login"? null: <input name="passwordConfirm" onChange={handleChange} value={confirmPassword}/>    
                }
                <button type="submit">{props.pageName === "login"? "Login": "Register"}</button>
            </form>
        </div>
    );
}