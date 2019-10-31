import React, { useState, useEffect, Fragment } from 'react';
import '../adminTable.scss';
import fetchShowings from '../../../../../api/movieShowing/fetchMovieShowing';
import addShowing from '../../../../../api/movieShowing/addMovieShowing';
import deleteShowing from '../../../../../api/movieShowing/deleteMovieShowing';
import updateShowing from '../../../../../api/movieShowing/updateMovieShowing';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import CRUDTable, {
    Fields,
    Field,
    CreateForm,
    UpdateForm,
    DeleteForm
} from 'react-crud-table';

function AdminTableMovieShowings() {
    const [data, setData] = useState([]);
    const [operation, setOperation] = useState({
        action: '',
        times: 0
    });

    async function fetchApi() {
        let res = await fetchShowings();
        setData(res);
    }
    async function addTaskApi(payload) {
        await addShowing(payload);
        setOperation({
            action: 'create',
            times: operation.times++
        });
    }
    async function deleteTaskApi(payload) {
        await deleteShowing(payload.movieShowingId);
        setOperation({
            action: 'delete',
            times: operation.times++
        });
    }
    async function updateTaskApi(payload) {
        await updateShowing(payload);
        setOperation({
            action: 'update',
            times: operation.times++
        });
    }

    useEffect(() => {
        fetchApi();
    }, [operation]);

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
                <CRUDTable caption="movieShowings" items={data}>
                    <Fields>
                        <Field
                            name="movieShowingId"
                            label="id"
                            hideInCreateForm
                            type="number"
                            sortable={false}
                        />
                        <Field name="screeningDateTime" label="screeningDateTime" sortable={false}  />
                        <Field name="showingDateFrom" label="showingDateFrom" sortable={false} render={dateRender} />
                        <Field name="showingDateTo" label="showingDateTo" sortable={false} render={dateRender} />
                        <Field
                            name="reservations"
                            label="reservations"
                            sortable={false}
                        />
                    </Fields>
                    <CreateForm
                        title="Movie Creation"
                        message="Create a new movie!"
                        trigger="Create Movie"
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

export default AdminTableMovieShowings;
