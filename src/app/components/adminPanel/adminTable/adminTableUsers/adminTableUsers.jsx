import React, { useState, useEffect, Fragment } from 'react';
import '../adminTable.scss';
import fetchUsers from '../../../../../api/user/fetchUsers';
import addUser from '../../../../../api/user/addUser';
import deleteUser from '../../../../../api/user/deleteUser';
import updateUser from '../../../../../api/user/updateUser';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getOptionSelectedDataKey } from '../../../../utils/arrayUtils';

import CRUDTable, {
    Fields,
    Field,
    CreateForm,
    UpdateForm,
    DeleteForm
} from 'react-crud-table';

function AdminTableUsers() {
    const [data, setData] = useState([]);
    const [operation, setOperation] = useState({
        action: '',
        times: 0
    });

    async function fetchApi() {
        let res = await fetchUsers();
        setData(res);
    }
    async function addTaskApi(payload) {
        payload.role = {
            roleId: options.roleSelected
        };
        console.log(payload);
        await addUser(payload);
        setOperation({
            action: 'create',
            times: operation.times++
        });
        //window.location.reload();
    }
    async function deleteTaskApi(payload) {
        await deleteUser(payload.userId);
        setOperation({
            action: 'delete',
            times: operation.times++
        });
        window.location.reload();
    }
    async function updateTaskApi(payload) {
        payload.role = {
            roleId: options.roleSelected
        };
        await updateUser(payload);
        setOperation({
            action: 'update',
            times: operation.times++
        });
        window.location.reload();
    }

    useEffect(() => {
        fetchApi();
    }, [operation]);

    // const getRoleName = items => {
    //     return items.role.roleName;
    // };
    const styles = {
        container: { margin: 'auto 20px', width: 'fit-content' }
    };
    const DescriptionRenderer = ({ field }) => (
        <textarea maxLength={100} {...field} />
    );
    const renderNumberField = ({ field }) => <input type="number" {...field} />;
    const dateRender = ({ field }) => <input type="date" {...field} />;
    const options = {
        roleSelected: null
    };
    const handleRoleChangeOption = e => {
        options.roleSelected = getOptionSelectedDataKey(e.target);
        console.log(options.roleSelected);
    };

    const selectMovieRender = () => {
        return (
            <select className="preselect" onChange={handleRoleChangeOption}>
                <option datakey="1" value="user">
                    user
                </option>
                <option datakey="2" value="admin">
                    admin
                </option>
            </select>
        );
    };
    return (
        <Fragment>
            <div style={styles.container}>
                <Link to="/adminPanel/">
                    <Button className="Back crud-button ">Back</Button>
                </Link>
                <CRUDTable caption="users" items={data}>
                    <Fields>
                        <Field
                            name="userId"
                            label="id"
                            hideInCreateForm
                            type="number"
                            sortable={false}
                        />
                        {/* <Field
                            name="roleId"
                            label="RoleId"
                            sortable={false}
                            tableValueResolver="role.roleId"
                        /> */}
                        <Field
                            name="roleName"
                            label="RoleName"
                            sortable={false}
                            tableValueResolver="role.roleName"
                            render={selectMovieRender}
                        />
                        <Field
                            name="password"
                            label="Password"
                            sortable={false}
                        />
                        <Field
                            name="firstName"
                            label="firstName"
                            sortable={false}
                        />
                        <Field
                            name="lastName"
                            label="lastName"
                            sortable={false}
                        />
                        <Field name="email" label="email" sortable={false} />
                        <Field name="phone" label="phone" sortable={false} />
                        <Field name="token" label="token" sortable={false} />
                        <Field
                            name="birthdate"
                            label="birthdate"
                            sortable={false}
                            render={dateRender}
                        />
                        <Field name="active" label="active" sortable={false} />
                        <Field
                            name="reservations"
                            label="reservations"
                            sortable={false}
                        />
                        <Field
                            name="thirdPartyOAuth"
                            label="thirdPartyOAuth"
                            sortable={false}
                        />
                        <Field
                            name="creationDate"
                            label="creationDate"
                            sortable={false}
                            render={dateRender}
                            hideInCreateForm
                        />
                    </Fields>
                    <CreateForm
                        title="Task Creation"
                        message="Create a new task!"
                        trigger="Create task"
                        onSubmit={task => addTaskApi(task)}
                        submitText="Create"
                        validate={values => {
                            const errors = {};
                            return errors;
                        }}
                    />

                    <UpdateForm
                        title="Task Update Process"
                        message="Update task"
                        trigger="Update"
                        onSubmit={task => updateTaskApi(task)}
                        submitText="Update"
                        validate={values => {
                            const errors = {};
                            return errors;
                        }}
                    />

                    <DeleteForm
                        title="Task Delete Process"
                        message="Are you sure you want to delete the task?"
                        trigger="Delete"
                        onSubmit={task => deleteTaskApi(task)}
                        submitText="Delete"
                        validate={values => {
                            const errors = {};
                            return errors;
                        }}
                    />
                </CRUDTable>
            </div>
        </Fragment>
    );
}

export default AdminTableUsers;
