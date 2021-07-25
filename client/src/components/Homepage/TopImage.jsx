import React from 'react';
import {Image, Card} from 'antd';

export default function TopImage(){


    const imgUrl = "https://www.musicianwithadayjob.com/wp-content/uploads/2018/05/aerial-3246120_1280.jpg";
    return(
        <div className="top-image">
            <img
                alt="homeImage"
                src={imgUrl}
                placeholder={
                    <img
                    alt="home-placeholder" 
                    src="https://wallpaperaccess.com/full/1385386.jpg"
                    preview={false}
                    >
                    </img>
                }
            >

            </img>
                <div className="top-message">
                    <h1>WELCOME TO MY BLOG</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
        </div>
    );
}