import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const UserCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="username" />
                <TextInput source="email" />
                <TextInput source="address.street" />
                <TextInput source="phone" />
                <TextInput source="website" />
                <TextInput source="company.name" />
                <DateInput source="id" label="Date joined" />
            </SimpleForm>
        </Create>
    );
}

export default UserCreate;