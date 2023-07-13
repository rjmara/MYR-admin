import React from 'react';

import {
    ArrayInput,
    SimpleFormIterator,
    Filter,
    List,
    Edit,
    Create,
    Datagrid,
    Responsive,
    TextField,
    EditButton,
    DisabledInput,
    LongTextInput,
    TextInput,
    NumberInput,
    BooleanInput,
    required,
    SimpleList,
    SaveButton,
    Toolbar,
    TabbedForm,
    FormTab
} from 'react-admin';

const CourseFilter = (props) => (
    <Filter {...props}>
        {/* <TextInput label="Search" source="q" alwaysOn /> */}
        {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
        <NumberInput label="Difficulty" source="difficulty" />
        {/* <TextInput label="Name" source="name" /> */}
        <TextInput label="Shortname" source="shortname" />
    </Filter>
);

const CourseEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Save"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

const CourseCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Create Course"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
);

export const CourseList = (props) => (
    <List {...props} bulkActionButtons={false} filters={<CourseFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `Shortname: ${record.shortname}`}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="index" />
                    <TextField source="shortname" />
                    <TextField source="name" />
                    <TextField source="difficulty" />
                    <TextField source="description" />
                    <TextField label="Lessons" source="lessons.length" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const CourseTitle = ({ record }) => {
    return <span>Course: {record ? `"${record.name}"` : ''}</span>;
};

export const CourseEdit = (props) => (
    <Edit title={<CourseTitle />} {...props}>
        <TabbedForm toolbar={<CourseEditToolbar />}>
            <FormTab label="Course Information">
                <DisabledInput source="_id" />
                <NumberInput source="index" validate={required()}/>
                <TextInput source="name" validate={required()}/>
                <TextInput source="shortname" validate={required()}/>
                <NumberInput source="difficulty" validate={required()}/>
                <LongTextInput source="description" validate={required()}/>
            </FormTab>
            <FormTab label="Lessons">
                <ArrayInput source="lessons">
                    <SimpleFormIterator>
                        <br />
                        <TextInput source="name"/>
                        <LongTextInput source="prompt" />
                        <LongTextInput source="code" />
                        <TextInput source="settings.skyColor" type="color" label="Sky Color" defaultValue="#ffffff" />
                        <BooleanInput source="settings.showFloor" label="Show Floor" defaultValue={true} />
                        <TextInput source="settings.floorColor" type="color" label="Floor Color" defaultValue="#272727" />
                        <BooleanInput source="settings.showCoordHelper" label="Show Coordinate Helper" defaultValue={false} />
                        <TextInput source="settings.camPositon" label="Camera Position" />
                        <NumberInput source="settings.camConfig" label="Camera Config" />
                        <BooleanInput source="settings.canFly" label="Can Fly" defaultValue={false} />
                        <BooleanInput source="settings.viewOnly" label="View Only" defaultValue={false} />
                        <BooleanInput source="settings.defaultLight" label="Default Light" defaultValue={true} />
                        <BooleanInput source="settings.lightIndicator" label="Show Light Indicators" defaultValue={false} />
                        <BooleanInput source="settings.shadow" label="Cast Shadows" defaultValue={false} />
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const CourseCreate = (props) => (
    <Create {...props}>
        <TabbedForm toolbar={<CourseCreateToolbar />}>
            <FormTab label="Course Information">
                <NumberInput source="index" validate={required()}/>
                <TextInput source="name" validate={required()} />
                <TextInput source="shortname" validate={required()} />
                <NumberInput source="difficulty" validate={required()} />
                <LongTextInput source="description" validate={required()} />
            </FormTab>
            <FormTab label="Lessons">
                <ArrayInput source="lessons">
                        <SimpleFormIterator>
                            <br />
                            <TextInput source="name" validate={required()} />
                            <LongTextInput source="prompt" validate={required()} />
                            <LongTextInput source="code" validate={required()} />
                            <TextInput source="settings.skyColor" type="color" label="Sky Color" defaultValue="#ffffff" />
                            <BooleanInput source="settings.showFloor" label="Show Floor" defaultValue={true} />
                            <TextInput source="settings.floorColor" type="color" label="Floor Color" defaultValue="#272727" />
                            <BooleanInput source="settings.showCoordHelper" label="Show Coordinate Helper" defaultValue={false} />
                            <TextInput source="settings.camPositon" label="Camera Position" />
                            <NumberInput source="settings.camConfig" label="Camera Config" />
                            <BooleanInput source="settings.canFly" label="Can Fly" defaultValue={false} />
                            <BooleanInput source="settings.viewOnly" label="View Only" defaultValue={false} />
                            <BooleanInput source="settings.defaultLight" label="Default Light" defaultValue={true} />
                            <BooleanInput source="settings.lightIndicator" label="Show Light Indicators" defaultValue={false} />
                            <BooleanInput source="settings.shadow" label="Cast Shadows" defaultValue={false} />
                        </SimpleFormIterator>
                    </ArrayInput>
            </FormTab>
        </TabbedForm>
    </Create>
);