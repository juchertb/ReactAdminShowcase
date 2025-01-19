import { Datagrid, 
            List, 
            ReferenceField, 
            TextField, 
            FunctionField,
            EditButton,
            TextInput,
            ReferenceInput,
            useRecordContext,
        } from 'react-admin';

const PostPanel = () => {
    const record = useRecordContext();
    return <div>{record?.body}</div>
}

const PostList = () => {
    const postFilters = [
        <TextInput source="q" label="pos.search" alwaysOn />,
        <ReferenceInput source="userId" label="resources.users.fields.user" reference="users" />
    ];

    return ( 
        <List filters={postFilters}>
            <Datagrid 
                expand={<PostPanel />}
                sx={{
                ".RaDatagrid-headerCell": {
            padding: "16px", }
            }}>      
                <TextField source="id" label="resources.posts.fields.postId" />
                <TextField source="title" label="resources.posts.fields.title" />
                <FunctionField label="resources.posts.fields.excerpt" render={(record) => `${record.body.substring(1, 50)}...`} /> 
                <ReferenceField source="userId" reference="users" label="resources.posts.fields.userId" />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default PostList;