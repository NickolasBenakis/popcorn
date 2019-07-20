import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = response => {
    console.log(response);
};

const FacebookLoginComponent = () => {
    return (
        <FacebookLogin
            appId="1088597931155576"
            autoLoad={true}
            fields="name,email,picture"
            onClick={responseFacebook}
            callback={responseFacebook}
        />
    );
};

export default FacebookLoginComponent;
