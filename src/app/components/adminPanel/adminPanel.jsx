import React, { Fragment } from 'react';
import './adminPanel.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function AdminPanel() {
    return (
        <Fragment>
            <h1 className="header col-12 col-sm-4">Admin Panel</h1>
            <main className="edit-list">
                <section>
                    <ul className="operations-list">
                        <Link to="/adminPanel/users">
                            <li>Users</li>
                        </Link>
                        <Link to="/adminPanel/movies">
                            <li>Movies</li>
                        </Link>
                        <Link to="/adminPanel/auditoriums">
                            <li>Auditoriums</li>
                        </Link>
                        <Link to="/adminPanel/movieShowings">
                            <li>Movie Showings</li>
                        </Link>
                    </ul>
                </section>
            </main>
            {/* <AdminTable /> */}
        </Fragment>
    );
}

export default AdminPanel;
