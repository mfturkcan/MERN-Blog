import React from 'react';
import {Image} from 'antd';

export default function TopImage(){
    return(
        <div className="top-image">
            <img
                alt="homeImage"
                src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
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
        </div>
    );
}