import React, { Fragment } from 'react';
import './adminPanel.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function AdminPanel() {
    return (
        <Fragment>
            <h1 className="header col-12 col-sm-4">Admin Panel</h1>
            <main className="admin-content">
                <h5 className="col-12">Edit the following data</h5>
                <section>
                    <ul className="operations-list list-group">
                        <Link to="/adminPanel/users">
                            <li className="list-group-item">Users</li>
                        </Link>
                        <Link to="/adminPanel/movies">
                            <li className="list-group-item">Movies</li>
                        </Link>
                        <Link to="/adminPanel/auditoriums">
                            <li className="list-group-item">Auditoriums</li>
                        </Link>
                        <Link to="/adminPanel/movieShowings">
                            <li className="list-group-item">Movie Showings</li>
                        </Link>
                    </ul>
                </section>
                <h5 className="col-12">Reports</h5>
                <section>
                    <ul className="reports-list list-group">
                        {/* <li>Check-in reservations</li>
                        <li>Total reservations by showings</li> */}
                        <Link to="/adminPanel/reports">
                            <li className="list-group-item">
                                Total reservations by users
                            </li>
                        </Link>
                    </ul>
                </section>
            </main>
        </Fragment>
    );
}

export default AdminPanel;
