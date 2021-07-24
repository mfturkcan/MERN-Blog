import React, { cloneElement } from 'react';
import { List, Datagrid, TextField, EditButton, ShowButton, TopToolbar, CreateButton, DeleteButton, ListActions, ExportButton} from 'react-admin';
import PostShowButton from './ShowButton';

const ListAction = (props) => {
    console.log(props);
    return (
        <TopToolbar>
            
            <CreateButton/>
            <ExportButton/>
        </TopToolbar>
    );
}

// {cloneElement(props.filters, { context: 'button' })}

const PostList = (props) => {
    return ( 
        <List {...props} actions={<ListAction />}>
            <Datagrid >
                <TextField source="_id"/>
                <TextField source="title" />
                <TextField source="content" />
                <TextField source="imgUrl" />
                <EditButton />
                <ShowButton />
                <DeleteButton />
            </Datagrid>
        </List>
    );
}
 
export default PostList;