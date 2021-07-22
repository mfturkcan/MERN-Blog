import React, {useState, useEffect} from 'react';
import "antd/dist/antd.css";
import AppHeader from './partials/Navbar';
import Home from './Homepage/Home';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Post from './PostPage/Post';
import postlist from './postList';
import Auth from './Auth/Auth';
import Footer from './partials/Footer';
import Layout from 'antd/lib/layout/layout';
import Secret from '../Secret';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function App(){


    let [isLoggedIn,setIsLoggedIn] = useState(false);
    let sid = Cookies.get("connectsid");


     function handleCookie(){
        sid = Cookies.get("connectsid");
        console.log(sid);
        if(sid !== undefined){
            console.log("not null value");
            setIsLoggedIn(true);
        }else{
            console.log("null value");
            setIsLoggedIn(false);
        }
        console.log("Is Logged in : " +isLoggedIn);
    }

    useEffect(()=>{
        console.log("Listening changes every time");
        handleCookie();
    });

    function handleLogin(isSuccess){
        setIsLoggedIn(isSuccess);
    }

    function findSpesificPost(id){
        const post = postlist.find(e => e.id === id);

        console.log(post);

        return post;
    }

    return(
        <div>
            <Layout >
                <AppHeader isLoggedIn={isLoggedIn}/>
                    <Switch>                        
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/post/:id" render={ props=>{
                            const post = findSpesificPost(props.match.params.id); 
                            
                            return <Post id={props.match.params.id} title={post.title} content={post.content} imgUrl={post.imgUrl}/>;
                        }}/>
                        <Route exact path="/login" render={ props=> isLoggedIn===true?<Secret />: <Auth pageName="login" handleLogin={ handleLogin }/> } />
                        <Route exact path="/register" render={ props => isLoggedIn===true?<Secret />: <Auth pageName="register"/> } />
                        <Route exact path="/secret">
                            <Secret />
                        </Route>
                        <Route exact path="/logout" render={props=>{axios.get("http://localhost:4000/logout", {withCredentials: true}).then(res=>{if(res.data === true){
                            console.log("Success logout!"); 
                            setIsLoggedIn(false);
                            return <Home />;
                            }
                        })}}/>
                        
                    </Switch>
                <Footer />
            </Layout>
        </div>
    );
}