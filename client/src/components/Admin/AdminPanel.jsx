import React from 'react';
import { Admin, Resource } from 'react-admin';
import PostList from './PostList.jsx';
import PostEdit from './PostEdit';
import MyRestProvider from './myRestProvider.js';
import PostCreate from './PostCreate.jsx';

export const AdminPanel = () =>{

    return (
        <Admin dataProvider={MyRestProvider} >
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
        </Admin>
    );
}