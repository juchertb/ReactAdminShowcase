import { SortButton, TextInput, EmailField, TopToolbar, FilterButton, CreateButton, ExportButton, SelectColumnsButton, DatagridConfigurable, List, TextField, EditButton } from "react-admin";

const PostListActions = () => (
    <TopToolbar>
        <SortButton  fields={['name', 'email']} />
        <SelectColumnsButton />
        <FilterButton />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

const UserList = () => {
    const userFilters = [
        <TextInput source="q" label="pos.search" alwaysOn />,
    ];

    return ( 
        <List filters={userFilters} actions={<PostListActions />}>
            <DatagridConfigurable>
                <TextField source="id" />
                <TextField source="name" />
                <EmailField source="email" />
                <TextField source="phone" />
                <EditButton />
            </DatagridConfigurable>
        </List>
    );
}

export default UserList;