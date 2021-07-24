import React from 'react';
import { Create, SimpleForm, TextInput, TextField, useNotify, useRedirect, useRefresh } from 'react-admin';


const PostCreate = (props) => {

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify("Successfuly created");
        redirect("/posts");
        refresh();  
    }

    const onFailure = () => {
        notify("An error occured");
        redirect("/posts");
        refresh();  
    }

    return ( 
        <Create onSuccess={onSuccess} onFailure={onFailure} {...props} >
            <SimpleForm>
                <TextField source="_id"/>
                <TextInput source="title"/>
                <TextInput source="content"/>
                <TextInput source="imgUrl"/>
            </SimpleForm>
        </Create>
     );
}
 
export default PostCreate;