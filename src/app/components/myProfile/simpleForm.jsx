import React, { Fragment, useEffect, useState } from 'react';
import { useFormState } from 'react-use-form-state';
import { Button } from 'react-bootstrap';
import getUserById from '../../../api/user/getUserById';
import updateUser from '../../../api/user/updateUser';
import {
    convertDateToInputDateForm,
    convertToDateTimeLocale
} from '../../utils/dateUtils';

const SimpleForm = () => {
    const [formState, { text, password, date, email }] = useFormState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        let res = await getUserById(
            parseInt(window.sessionStorage.getItem('userID'))
        );
        setIsLoading(false);
        if (res) {
            formState.setField('firstName', res.firstName || undefined);
            formState.setField('lastName', res.lastName || undefined);
            formState.setField('phone', res.phone || undefined);
            formState.setField('email', res.email || undefined);
            formState.setField(
                'birthdate',
                convertDateToInputDateForm(res.birthdate) || undefined
            );
            formState.setField('password', res.password || undefined);
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();
        formState.values.birthdate = convertToDateTimeLocale(
            formState.values.birthdate
        );
        formState.values.userId = parseInt(
            window.sessionStorage.getItem('userID')
        );
        let res = await updateUser(formState.values);
    };

    const editField = e => {
        const targetEl = e.currentTarget;
        if (
            targetEl &&
            targetEl.previousSibling &&
            targetEl.previousSibling.hasAttribute('readOnly')
        )
            targetEl.previousSibling.removeAttribute('readOnly');
    };

    return (
        <Fragment>
            {isLoading ? (
                <div className="loading-bar"></div>
            ) : (
                <form onSubmit={handleSubmit} className="row container ">
                    <div className="d-block">
                        <label>
                            <span className="form-edit__label">first name</span>
                            <input
                                className="form-edit__input"
                                {...text('firstName')}
                                readOnly={true}
                            />
                            <i
                                className="edit-fav-icon fas fa-pen"
                                onClick={editField}></i>
                        </label>
                    </div>
                    <div className="d-block">
                        <label>
                            <span className="form-edit__label">last name</span>
                            <input
                                className="form-edit__input"
                                {...text('lastName')}
                                readOnly={true}
                            />
                            <i
                                className="edit-fav-icon fas fa-pen"
                                onClick={editField}></i>
                        </label>
                    </div>
                    <div className="d-block">
                        <label>
                            <span className="form-edit__label">email</span>
                            <input
                                className="form-edit__input"
                                {...email('email')}
                                readOnly={true}
                            />
                            <i
                                className="edit-fav-icon fas fa-pen"
                                onClick={editField}></i>
                        </label>
                    </div>
                    <div className="d-block">
                        <label>
                            <span className="form-edit__label">phone</span>
                            <input
                                className="form-edit__input"
                                {...text('phone')}
                                readOnly={true}
                            />
                            <i
                                className="edit-fav-icon fas fa-pen"
                                onClick={editField}></i>
                        </label>
                    </div>
                    <div className="d-block">
                        <label>
                            <span className="form-edit__label">password</span>
                            <input
                                className="form-edit__input"
                                {...password('password')}
                                readOnly={true}
                            />
                            <i
                                className="edit-fav-icon fas fa-pen"
                                onClick={editField}></i>
                        </label>
                    </div>
                    <div className="d-block">
                        <label>
                            <span className="form-edit__label">birth date</span>
                            <input
                                className="form-edit__input"
                                {...date('birthdate')}
                                readOnly={true}
                            />
                            <i
                                className="edit-fav-icon fas fa-pen"
                                onClick={editField}></i>
                        </label>
                    </div>
                    <div className="d-block col-12 btn-container">
                        <label>
                            <Button
                                className="form-edit__submit"
                                type="submit"
                                value="Press me">
                                Save
                            </Button>
                        </label>
                    </div>
                </form>
            )}
        </Fragment>
    );
};

export default SimpleForm;
