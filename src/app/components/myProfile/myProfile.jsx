import React, { Component } from 'react';
import Basic from './Basic';
import './myProfile.scss';

class MyProfile extends Component {
    render() {
        return (
            <div className="profile-container">
                this is my Profile !!
                <Basic />
            </div>
        );
    }
}

export default MyProfile;
