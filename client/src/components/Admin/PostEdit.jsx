import React from 'react';
import { Edit, SimpleForm, TextInput, TextField } from 'react-admin';


const PostEdit = (props) => {
    console.log(props);
    console.log("edit");
    return ( 
        <Edit {...props}>
            <SimpleForm>
                <TextField source="_id"/>
                <TextInput source="title"/>
                <TextInput source="content"/>
                <TextInput source="imgUrl"/>
            </SimpleForm>
        </Edit>
     );
}
 
export default PostEdit;