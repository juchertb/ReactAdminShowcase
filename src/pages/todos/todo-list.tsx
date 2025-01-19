import { DatagridConfigurable,
            List, 
            ReferenceField, 
            TextField, 
            EditButton,
            TextInput,
            ReferenceInput,
            TopToolbar,
            FilterButton,
            BooleanField,
            SortButton,
            SelectColumnsButton,
            CreateButton,
            ExportButton} from 'react-admin';

const TodoListActions = () => (
    <TopToolbar>
        <SortButton  fields={['id', 'title']} />
        <SelectColumnsButton />
        <FilterButton />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

const TodoList = () => {
    const todoFilters = [
        <TextInput source="q" label="pos.search" alwaysOn />,
        <ReferenceInput source="userId" label="resoures.users.user" reference="users" />
    ];

    return ( 
        <List filters={todoFilters} actions={<TodoListActions />}>
            <DatagridConfigurable 
                sx={{
                ".RaDatagrid-headerCell": {
                padding: "16px", }
            }}>      
                <TextField source="id" />
                <TextField source="title" />
                <BooleanField source="completed" />
                <ReferenceField source="userId" reference="users" />
                <EditButton />
            </DatagridConfigurable>
        </List>
    );
};

export default TodoList;