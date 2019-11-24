import React, { useState, useEffect, Fragment } from 'react';
import '../adminTable.scss';
import fetchShowings from '../../../../../api/movieShowing/fetchMovieShowing';
import addShowing from '../../../../../api/movieShowing/addMovieShowing';
import deleteShowing from '../../../../../api/movieShowing/deleteMovieShowing';
import updateShowing from '../../../../../api/movieShowing/updateMovieShowing';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import fetchMovies from '../../../../../api/movies/fetchMovies';
import fetchAuditoriums from '../../../../../api/auditoriums/fetchAuditoriums';
import { getOptionSelectedDataKey } from '../../../../utils/arrayUtils';
import { validateChecker } from '../../../../utils/validateChecker';

import CRUDTable, {
    Fields,
    Field,
    CreateForm,
    UpdateForm,
    DeleteForm
} from 'react-crud-table';

function AdminTableMovieShowings() {
    const [data, setData] = useState([]);
    const [movies, setMovies] = useState([]);
    const [auditoriums, setAuditoriums] = useState([]);
    const [operation, setOperation] = useState({
        action: '',
        times: 0
    });
    const options = {
        movieSelected: null,
        auditoriumSelected: null
    };
    const handleMovieChangeOption = e => {
        options.movieSelected = getOptionSelectedDataKey(e.target);
    };
    const handleAuditoriumsChangeOption = e => {
        options.auditoriumSelected = getOptionSelectedDataKey(e.target);
    };

    async function fetchApi() {
        let res = await fetchShowings();
        res = res.sort((a, b) => a.movieShowingId - b.movieShowingId);
        setData(res);
    }
    async function addTaskApi(payload) {
        if (validateChecker(options.movieSelected)) {
            payload.movie = {
                movieId: options.movieSelected
            };
        }
        if (validateChecker(options.auditoriumSelected)) {
            payload.auditorium = {
                auditoriumId: options.auditoriumSelected
            };
        }
        await addShowing(payload);
        setOperation({
            action: 'create',
            times: operation.times++
        });
        window.location.reload();
    }
    async function updateTaskApi(payload) {
        if (validateChecker(options.movieSelected)) {
            payload.movie = {
                movieId: options.movieSelected
            };
        }
        if (validateChecker(options.auditoriumSelected)) {
            payload.auditorium = {
                auditoriumId: options.auditoriumSelected
            };
        }
        await updateShowing(payload);
        setOperation({
            action: 'update',
            times: operation.times++
        });
        window.location.reload();
    }
    async function deleteTaskApi(payload) {
        await deleteShowing(payload.movieShowingId);
        setOperation({
            action: 'delete',
            times: operation.times++
        });
        window.location.reload();
    }

    const getSubTableData = async () => {
        const resMovies = await fetchMovies();
        const resAuditoriums = await fetchAuditoriums();
        setMovies(makeMovieOptions(resMovies));
        setAuditoriums(makeAuditoriumOptions(resAuditoriums));
    };
    useEffect(() => {
        Promise.all([getSubTableData(), fetchApi()]);
    }, [operation]);

    const styles = {
        container: { margin: 'auto 20px', width: 'fit-content' }
    };
    const disabledField = ({ field }) => <input {...field} disabled />;
    const dateRender = ({ field }) => <input type="date" {...field} />;
    const timeRender = ({ field }) => <input type="time" {...field} />;
    const makeMovieOptions = model => {
        const arr = model.map(el => (
            <option key={el.movieId} datakey={el.movieId} value={el.title}>
                {el.title}
            </option>
        ));
        return arr;
    };
    const makeAuditoriumOptions = model => {
        const arr = model.map(el => (
            <option
                key={el.auditoriumId}
                datakey={el.auditoriumId}
                value={el.name}>
                {el.name}
            </option>
        ));
        return arr;
    };
    const selectMovieRender = () => {
        return (
            <select className="preselect" onChange={handleMovieChangeOption}>
                {movies.map(el => el)}
            </select>
        );
    };
    const selectAuditoriumRender = () => {
        return (
            <select
                className="preselect"
                onChange={handleAuditoriumsChangeOption}>
                {auditoriums.map(el => el)}
            </select>
        );
    };

    return (
        <Fragment>
            {movies.length && auditoriums.length ? (
                <div style={styles.container}>
                    <Link to="/adminPanel/">
                        <Button className="Back crud-button ">Back</Button>
                    </Link>
                    <CRUDTable
                        caption="movieShowings"
                        fetchItems={() => Promise.resolve(data)}>
                        <Fields>
                            <Field
                                name="movieShowingId"
                                label="id"
                                sortable={false}
                                render={disabledField}
                            />
                            <Field
                                name="movie"
                                label="movie"
                                sortable={false}
                                tableValueResolver="movie.title"
                                render={selectMovieRender}
                            />
                            <Field
                                name="Auditorium"
                                label="Auditorium"
                                sortable={false}
                                tableValueResolver="auditorium.name"
                                render={selectAuditoriumRender}
                            />
                            <Field
                                name="screeningDateTime"
                                label="screeningDateTime"
                                sortable={false}
                                render={timeRender}
                            />
                            <Field
                                name="showingDateFrom"
                                label="showingDateFrom"
                                sortable={false}
                                render={dateRender}
                            />
                            <Field
                                name="showingDateTo"
                                label="showingDateTo"
                                sortable={false}
                                render={dateRender}
                            />
                            {/* <Field
                                name="reservations"
                                label="reservations"
                                sortable={false}
                                
                            /> */}
                        </Fields>
                        <CreateForm
                            title="task Creation"
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
            ) : (
                <span className="loading-bar"></span>
            )}
        </Fragment>
    );
}

export default AdminTableMovieShowings;
