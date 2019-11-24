import React, { Component, Fragment } from 'react';
import SimpleForm from './simpleForm.jsx';
import './myProfile.scss';

class MyProfile extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="header col-12 col-sm-4 pre-wrap">
                    Edit Profile
                </h1>
                <div className="container card-group">
                    <div className="card card-body">
                        <SimpleForm />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MyProfile;
