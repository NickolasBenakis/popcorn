import React, { useState, useEffect, Fragment } from 'react';
import '../adminTable.scss';
import fetchMovies from '../../../../../api/movies/fetchMovies';
import addMovie from '../../../../../api/movies/addMovie';
import deleteMovie from '../../../../../api/movies/deleteMovie';
import updateMovie from '../../../../../api/movies/updateMovie';
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
        let res = await fetchMovies();
        setData(res);
    }
    async function addTaskApi(payload) {
        await addMovie(payload);
        setOperation({
            action: 'create',
            times: operation.times++
        });
    }
    async function deleteTaskApi(payload) {
        await deleteMovie(payload.movieId);
        setOperation({
            action: 'delete',
            times: operation.times++
        });
    }
    async function updateTaskApi(payload) {
        await updateMovie(payload);
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
                <CRUDTable caption="movies" items={data}>
                    <Fields>
                        <Field
                            name="movieId"
                            label="id"
                            hideInCreateForm
                            type="number"
                            sortable={false}
                        />
                        <Field name="title" label="Title" sortable={false} />
                        <Field
                            name="director"
                            label="Director"
                            sortable={false}
                        />
                        <Field name="cast" label="Cast" sortable={false} />
                        <Field
                            name="description"
                            label="Description"
                            render={DescriptionRenderer}
                            sortable={false}
                        />
                        <Field
                            name="movieImageUrl"
                            label="Image"
                            sortable={false}
                        />
                        <Field
                            name="movieTrailerUrl"
                            label="Trailer"
                            sortable={false}
                        />
                        <Field
                            name="durationMin"
                            label="Mins"
                            sortable={false}
                            render={renderNumberField}
                        />
                        <Field
                            name="premiereDate"
                            label="PremiereDate"
                            sortable={false}
                            render={dateRender}
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

export default AdminTableUsers;
