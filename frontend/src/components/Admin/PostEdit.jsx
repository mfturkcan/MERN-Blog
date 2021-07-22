import React from 'react';
import { Edit, SimpleForm, TextInput, SelectInput, TextField } from 'react-admin';


const PostEdit = (props) => {
    return ( 
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="_id"/>
                <TextField source="title"/>
                <TextInput source="content"/>
                <TextInput source="imgUrl"/>
            </SimpleForm>
        </Edit>
     );
}
 
export default PostEdit;