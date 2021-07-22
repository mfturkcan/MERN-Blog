import React from 'react';
import { List, Datagrid, TextField, EditButton} from 'react-admin';

const PostList = (props) => {
    return ( 
        <List {...props}>
            <Datagrid>
                <TextField source="_id"/>
                <TextField source="title" />
                <TextField source="content" />
                <TextField source="imgUrl" />
                <EditButton />
            </Datagrid>
        </List>
    );
}
 
export default PostList;