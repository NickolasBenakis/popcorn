import React from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = response => {
    console.log(response);
};

const GoogleLoginComponent = () => {
    return (
        <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleLoginComponent;
