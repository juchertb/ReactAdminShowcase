import * as React from 'react';
import {
    Datagrid,
    DateField,
    Edit,
    EditButton,
    Pagination,
    ReferenceManyField,
    ReferenceManyCount,
    required,
    TabbedForm,
    TextField,
    TextInput,
    ReferenceField,
    FileInput,
    FileField,
    BooleanField
} from 'react-admin';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ReviewIcon from '@mui/icons-material/Comment';
import AssignmentIcon from '@mui/icons-material/Assignment';

const RichTextInput = React.lazy(() =>
    import('ra-input-rich-text').then(module => ({
        default: module.RichTextInput,
    }))
);

const UserEdit = () => (
    <Edit>
        <TabbedForm>
            <TabbedForm.Tab
                label="resources.users.tabs.general"
                sx={{ maxWidth: '40em', minHeight: 48 }}
                iconPosition="start"
                icon={<PhotoCameraIcon />}
            >
                <TextInput source="id" />
                <TextInput source="name" />
                <TextInput source="username" />
                <TextInput source="email" />
                <TextInput source="address.street" />
                <TextInput source="phone" />
                <TextInput source="website" />
                <TextInput source="company.name" />
            </TabbedForm.Tab>
            <TabbedForm.Tab
                label="resources.users.tabs.attachments"
                path="details"
                sx={{ maxWidth: '40em', minHeight: 48 }}
                iconPosition="start"
                icon={<AspectRatioIcon />}
            >
                <FileInput source="attachments" multiple>
                    <FileField source="src" title="title"  />
                </FileInput>
            </TabbedForm.Tab>
            <TabbedForm.Tab
                label="resources.products.tabs.description"
                path="description"
                sx={{ maxWidth: '40em', minHeight: 48 }}
                iconPosition="start"
                icon={<EditNoteIcon />}
            >
                <RichTextInput source="company.catchPhrase" label="" validate={req} />
            </TabbedForm.Tab>
            <TabbedForm.Tab
                label="resources.users.tabs.posts"
                count={
                    <ReferenceManyCount
                        reference="posts"
                        target="userId"
                        sx={{ lineHeight: 'inherit' }}
                    />
                }
                path="reviews"
                sx={{ minHeight: 48 }}
                iconPosition="start"
                icon={<ReviewIcon />}
            >
                <ReferenceManyField
                    reference="posts"
                    target="userId"
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
                        {/*<CustomerReferenceField source="customer_id" />*/}
                        {/*<StarRatingField
                            label="resources.reviews.fields.rating"
                            source="rating"
                        />*/}
                        <TextField source="id" />
                        <TextField source="title" />
                        <ReferenceField source="userId" reference="users" />
                        <DateField source="date" />
                        <EditButton />
                    </Datagrid>
                    {/*<CreateRelatedReviewButton />*/}
                </ReferenceManyField>
            </TabbedForm.Tab>
            <TabbedForm.Tab
                label="Todos"
                count={
                    <ReferenceManyCount
                        reference="todos"
                        target="userId"
                        sx={{ lineHeight: 'inherit' }}
                    />
                }
                path="todos"
                sx={{ minHeight: 48 }}
                iconPosition="start"
                icon={<AssignmentIcon />}
            >
                <ReferenceManyField
                    reference="todos"
                    target="userId"
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
                        <TextField source="title" />
                        <BooleanField source="completed" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </TabbedForm.Tab>
        </TabbedForm>
    </Edit>
);

const req = [required()];

export default UserEdit;