import React, { Component } from 'react';
import Basic from './Basic';
import './myProfile.scss';

class MyProfile extends Component {
    render() {
        return (
            <div className="profile-container">
                Edit your profile
                <Basic />
            </div>
        );
    }
}

export default MyProfile;
