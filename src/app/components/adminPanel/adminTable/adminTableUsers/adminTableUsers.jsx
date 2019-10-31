import React, { useState, useEffect, Fragment } from 'react';
import '../adminTable.scss';
import fetchUsers from '../../../../../api/user/fetchUsers';
import addUser from '../../../../../api/user/addUser';
import deleteUser from '../../../../../api/user/deleteUser';
import updateUser from '../../../../../api/user/updateUser';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
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
        await addUser(payload);
        setOperation({
            action: 'create',
            times: operation.times++
        });
    }
    async function deleteTaskApi(payload) {
        await deleteUser(payload.userId);
        setOperation({
            action: 'delete',
            times: operation.times++
        });
    }
    async function updateTaskApi(payload) {
        await updateUser(payload);
        setOperation({
            action: 'update',
            times: operation.times++
        });
    }

    useEffect(() => {
        fetchApi();
    }, [operation]);

    const getRoleName = (items)=> {
        return items.role.roleName;
    }
    const styles = {
        container: { margin: 'auto 20px', width: 'fit-content' }
    };
    const DescriptionRenderer = ({ field }) => (
        <textarea maxLength={100} {...field} />
    );
    const renderNumberField = ({ field }) => <input type="number" {...field} />;
    const dateRender = ({ field }) => <input type="date" {...field} />;
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
                        <Field name="roleId" label="RoleId" sortable={false} tableValueResolver="role.roleId" />
                        <Field name="roleName" label="RoleName" sortable={false} tableValueResolver="role.roleName" />
                        <Field name="password" label="Password" sortable={false} />
                        <Field name="firstName" label="firstName" sortable={false} />
                        <Field name="lastName" label="lastName" sortable={false} />
                        <Field name="email" label="email" sortable={false} />
                        <Field name="phone" label="phone" sortable={false} />
                        <Field name="token" label="token" sortable={false} />
                        <Field name="birthdate" label="birthdate" sortable={false}  render={dateRender}/>
                        <Field name="active" label="active" sortable={false} />
                        <Field name="reservations" label="reservations" sortable={false} />
                        <Field name="thirdPartyOAuth" label="thirdPartyOAuth" sortable={false} />
                        <Field name="creationDate" label="creationDate" sortable={false} render={dateRender} />
                    </Fields>
                    <CreateForm
                        title="Task Creation"
                        message="Create a new task!"
                        trigger="Create task"
                        onSubmit={task => addTaskApi(task)}
                        submitText="Create"
                        validate={values => {
                            const errors = {};
                            // if (!values.title) {
                            //     errors.title = "Please, provide movie's title";
                            // }
                            // if (!values.description) {
                            //     errors.description =
                            //         "Please, provide movie's description";
                            //}
                            // if (values.durationMin) {
                            //     console.log(values.durationMin);
                            //     values.durationMin = parseInt(values.durationMin);
                            //     // errors.durationMin =
                            //     //     "Please, provide movie's duration";
                            // }
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

                            // if (!values.id) {
                            //     errors.id = 'Please, provide id';
                            // }

                            // if (!values.title) {
                            //     errors.title = "Please, provide task's title";
                            // }

                            // if (!values.description) {
                            //     errors.description =
                            //         "Please, provide task's description";
                            // }

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
                            if (!values.movieId) {
                                errors.id = 'Please, provide id';
                            }
                            return errors;
                        }}
                    />
                </CRUDTable>
            </div>
        </Fragment>
    );
}

export default AdminTableUsers;
