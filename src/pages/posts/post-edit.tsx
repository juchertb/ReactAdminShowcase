import { Edit, ReferenceInput, TabbedForm, TextInput, TextField, EmailField,
    ReferenceManyCount, ReferenceManyField, Datagrid, EditButton, Pagination
 } from 'react-admin';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ReviewsIcon from '@mui/icons-material/Reviews';

const PostEdit = () => (
    <Edit>
        <TabbedForm>
            <TabbedForm.Tab
                label="resources.users.tabs.general"
                sx={{ maxWidth: '40em', minHeight: 48 }}
                iconPosition="start"
                icon={<PhotoCameraIcon />}
            >
                <ReferenceInput source="userId" reference="users" />
                <TextInput source="id" />
                <TextInput source="title" />
                <TextInput source="body" />
            </TabbedForm.Tab>
            <TabbedForm.Tab
                label="Comments"
                count={
                    <ReferenceManyCount
                        reference="comments"
                        target="postId"
                        sx={{ lineHeight: 'inherit' }}
                    />
                }
                path="todos"
                sx={{ minHeight: 48 }}
                iconPosition="start"
                icon={<ReviewsIcon />}
            >
                <ReferenceManyField
                    reference="comments"
                    target="postId"
                    pagination={<Pagination />}
                >
                    <Datagrid
                        sx={{
                            width: '100%',
                            '& .column-comment': {
                                maxWidth: '20em',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            },
                        }}
                    >
                        <TextField source="id" />
                        <TextField source="name" label="Name" />
                        <EmailField source="email" label="Email" />
                        <TextField source="body" label="Body" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </TabbedForm.Tab>
        </TabbedForm>
    </Edit>
);

export default PostEdit;