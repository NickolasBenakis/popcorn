import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ adminRoute, render: Component, ...options }) => {
    const adminLogic = () => {
        return window.sessionStorage.getItem('token') &&
            parseInt(window.sessionStorage.getItem('roleID')) === 2 ? (
            <Route {...options} render={props => <Component {...props} />} />
        ) : (
            <Route
                {...options}
                render={props => (
                    <Redirect
                        to={{
                            pathname: '/'
                        }}
                    />
                )}
            />
        );
    };
    const userLogic = () => {
        return window.sessionStorage.getItem('token') &&
            window.sessionStorage.getItem('roleID') ? (
            <Route {...options} render={props => <Component {...props} />} />
        ) : (
            <Route
                {...options}
                render={props => (
                    <Redirect
                        to={{
                            pathname: '/'
                        }}
                    />
                )}
            />
        );
    };

    return adminRoute ? adminLogic() : userLogic();
};

export default PrivateRoute;
