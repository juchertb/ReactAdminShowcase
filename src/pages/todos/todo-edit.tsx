import { Edit, ReferenceInput, SimpleForm, TextInput, BooleanInput } from 'react-admin';

const TodoEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" />
            <TextInput source="title" />
            <BooleanInput source="completed" />
        </SimpleForm>
    </Edit>
);

export default TodoEdit;