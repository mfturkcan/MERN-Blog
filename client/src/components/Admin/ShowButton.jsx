import React from 'react';
import { ShowButton } from 'react-admin';

const PostShowButton = (record) => {
    return ( 
        <ShowButton basePath="/posts" label="Show Post" record={record}/>
     );
}
 
export default PostShowButton;