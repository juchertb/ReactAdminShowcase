import { ReferenceField, Show, SimpleShowLayout, TextField, BooleanField, Field, TextInput} from 'react-admin';

/*
const booleanFormatter = (value: boolean | any) => {
    if (value == null) return 'No';
    return value == true ? 'Yes' : 'No';
  };
*/
const TodoShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="title" />
            {/*<TextInput source="completed" format={booleanFormatter} />*/}
            <TextField source="completed" />
        </SimpleShowLayout>
    </Show>
);

export default TodoShow;