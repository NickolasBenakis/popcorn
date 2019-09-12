import React, { Component } from 'react';
import SimpleForm from './simpleForm';
import './myProfile.scss';

class MyProfile extends Component {
    render() {
        return (
            <div className="profile-container">
                Edit your profile
                <SimpleForm />
            </div>
        );
    }
}

export default MyProfile;
