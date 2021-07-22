import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import PostList from './PostList.jsx';
import PostEdit from './PostEdit';
import simpleRestProvider from 'ra-data-simple-rest';

export const AdminPanel = () =>{

    const httpClient = (url, options = {}) => {
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
        }
        // add your own headers here
        options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
        return fetchUtils.fetchJson(url, options);
    };


    const data = simpleRestProvider("http://localhost:4000", httpClient);
    return (
        <Admin dataProvider={data}>
            <Resource name="posts" list={PostList} edit={PostEdit}/>
        </Admin>
    );
}