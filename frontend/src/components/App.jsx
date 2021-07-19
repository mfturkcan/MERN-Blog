import React from 'react';
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

export default function App(){

    function findSpesificPost(id){
        const post = postlist.find(e => e.id === id);

        console.log(post);

        return post;
    }


    return(
        <div>
            <Layout >
                <AppHeader />
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
                            <Route exact path="/login">
                                <Auth pageName="login"/>
                            </Route>
                            <Route exact path="/secret">
                                <Secret />
                            </Route>
                        </Switch>
                <Footer />
            </Layout>
        </div>
    );
}