import React from 'react';
import { Link } from 'react-router-dom';
import CardPost from './CardPost';
import TopImage from './TopImage';
import postlist from '../postList';
import { Space } from 'antd';

export default function home(){

    


    return(
        <div>
            <TopImage />
                <div className="home-card-posts">
                    <Space size={32}>
                        {
                            postlist.map(e=>{
                                return <Link to={`/post/${e.id}`}>
                                    <CardPost id={e.id} title={e.title} content={e.content} imgUrl={e.imgUrl} />
                                </Link>
                            })
                        }
                    </Space>
                </div>
        </div>
    );
}