import { DatagridConfigurable,
            List, 
            ReferenceField, 
            TextField, 
            EditButton,
            TextInput,
            TopToolbar,
            FilterButton,
            EmailField,
            SortButton,
            SelectColumnsButton,
            CreateButton,
            ExportButton} from 'react-admin';

const CommentsListActions = () => (
    <TopToolbar>
        <SortButton  fields={['name', 'email']} />
        <SelectColumnsButton />
        <FilterButton />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

const CommentsList = () => {
    const commentsFilters = [
        <TextInput source="q" label="pos.search" alwaysOn />,
    ];

    return ( 
        <List filters={commentsFilters} actions={<CommentsListActions />}>
            <DatagridConfigurable 
                sx={{
                ".RaDatagrid-headerCell": {
                padding: "16px", }
            }}>      
                <TextField source="id" />
                <ReferenceField source="postId" reference="posts" />
                <TextField source="name" />
                <EmailField source="email" />
                <TextField source="body" />
                <EditButton />
            </DatagridConfigurable>
        </List>
    );
};

export default CommentsList;