import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";

const CommentCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <ReferenceInput source="postId" reference="posts" />
                <TextInput source="name" />
                <TextInput source="email" />
                <TextInput source="body" multiline rows={5} />
            </SimpleForm>
        </Create>
    );
}

export default CommentCreate;