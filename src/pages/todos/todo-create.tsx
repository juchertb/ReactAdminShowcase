import { Create, ReferenceInput, SimpleForm, TextInput, BooleanInput } from "react-admin";

const TodoCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users" />
                <TextInput source="title" />
                <BooleanInput source="completed" />
            </SimpleForm>
        </Create>
    );
}

export default TodoCreate;