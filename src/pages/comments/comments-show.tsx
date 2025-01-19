import { ReferenceField, Show, SimpleShowLayout, TextField, EmailField } from 'react-admin';

const CommentShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="postId" reference="posts" />
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="body" />
        </SimpleShowLayout>
    </Show>
);

export default CommentShow;