import React, { useState } from 'react';
import axios from 'axios';
import {Input} from 'antd';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export default function Auth(props){


    const schema = Yup.object().shape({
        email: Yup.string().email().required("Email must be given!"),
        password: Yup.string().min(8).max(32).required("Password must be given!"),
    });

    const {register, reset, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(schema)});
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

    function onSubmitHandler(data){
        console.log(data);
        

        try{
            console.log(__dirname);
            //  +props.pageName === "login"?"login":"register"
            axios.post("http://localhost:4000/"+page, data, {withCredentials: true}).then(res=>{
                if(res.data === true){
                    props.handleLogin(true); 
                    history.push("/secret");
                }
            });
        }catch(e){
            console.log(e);
        }
        reset();
        
    }

    return(
        <div className="auth">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <Input size="large" type="email" name="email" {...register('email')}onChange={handleChange} value={email} placeholder="Email address" required/>
                <p>{errors.email?.message}</p>
                <Input size="large" type="password" name="password" {...register('password')} onChange={handleChange} value={password} placeholder="Password" required/>
                <p>{errors.password?.message}</p>
                {
                    props.pageName === "login"? null: <Input size="large" type="password" name="passwordConfirm" onChange={handleChange} value={confirmPassword} placeholder="Confirm Password"/>    
                }
                <button type="submit">{props.pageName === "login"? "Log-in": "Register"}</button>
            </form>
        </div>
    );
}