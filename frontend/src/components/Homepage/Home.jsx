import React from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import CardPost from './CardPost';
import TopImage from './TopImage';
import postlist from '../postList';

export default function home(){

    


    return(
        <div>
            <TopImage />
                {
                    postlist.map(e=>{
                        return <Link to={`/post/${e.id}`}>
                            <CardPost id={e.id} title={e.title} content={e.content} imgUrl={e.imgUrl} />
                        </Link>
                    })
                }
        </div>
    );
}