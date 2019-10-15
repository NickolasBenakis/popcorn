import React, { useState, useEffect } from 'react';
import './adminTable.scss';
import fetchMovies from '../../../../api/movies/fetchMovies';
import addMovie from '../../../../api/movies/addMovie';
import deleteMovie from '../../../../api/movies/deleteMovie';
import updateMovie from '../../../../api/movies/updateMovie';

import CRUDTable, {
    Fields,
    Field,
    CreateForm,
    UpdateForm,
    DeleteForm
} from 'react-crud-table';

function AdminTable() {
    const [data, setData] = useState([]);

    async function fetchApi() {
        let res = await fetchMovies();
        setData(res);
    }
    async function addTaskApi(payload) {
        let res = await addMovie(payload);
        await fetchApi();
    }
    async function deleteTaskApi(payload) {
        let res = await deleteMovie(payload.movieId);
        console.log(res);
        await fetchApi();
    }
    async function updateTaskApi(payload) {
        let res = await updateMovie(payload);
        console.log(res);
        await fetchApi();
    }

    useEffect(() => {
        fetchApi();
    }, []);

    const styles = {
        container: { margin: 'auto 20px', width: 'fit-content' }
    };
    const DescriptionRenderer = ({ field }) => (
        <textarea maxLength={100} {...field} />
    );
    const renderNumberField = ({ field }) => <input type="number" {...field} />;
    const dateRender = ({ field }) => <input type="date" {...field} />;
    return (
        <div style={styles.container}>
            <CRUDTable caption="movies" items={data}>
                <Fields>
                    <div>
                        <Field
                            name="movieId"
                            label="id"
                            hideInCreateForm
                            type="number"
                            sortable={false}
                        />
                    </div>
                    <Field name="title" label="Title" sortable={false} />
                    <Field name="director" label="Director" sortable={false} />
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
    );
}

export default AdminTable;
