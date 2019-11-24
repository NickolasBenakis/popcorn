import React, { Fragment } from 'react';
import { useFormState } from 'react-use-form-state';
import { Button } from 'react-bootstrap';
const SimpleForm = () => {
    const [formState, { text, password, date, email }] = useFormState();
    const handleSubmit = event => {
        event.preventDefault();
        console.log(formState);
    };
    return (
        <Fragment>
            <form onSubmit={handleSubmit} className="row container ">
                <div className="d-block">
                    <label>
                        <span className="form-edit__label">firstName</span>
                        <input
                            className="form-edit__input"
                            {...text('firstName')}
                        />
                    </label>
                </div>
                <div className="d-block">
                    <label>
                        <span className="form-edit__label">lastName</span>
                        <input
                            className="form-edit__input"
                            {...text('lastName')}
                        />
                    </label>
                </div>
                <div className="d-block">
                    <label>
                        <span className="form-edit__label">email</span>
                        <input
                            className="form-edit__input"
                            {...email('email')}
                        />
                    </label>
                </div>
                <div className="d-block">
                    <label>
                        <span className="form-edit__label">phone</span>
                        <input
                            className="form-edit__input"
                            {...text('phone')}
                        />
                    </label>
                </div>
                <div className="d-block">
                    <label>
                        <span className="form-edit__label">password</span>
                        <input
                            className="form-edit__input"
                            {...password('password')}
                            minLength="5"
                        />
                    </label>
                </div>
                <div className="d-block">
                    <label>
                        <span className="form-edit__label">birthdate</span>
                        <input
                            className="form-edit__input"
                            {...date('birthdate')}
                        />
                    </label>
                </div>
                <div className="d-block col-12">
                    <label>
                        <span className="form-edit__label"></span>
                        <Button
                            className="form-edit__submit"
                            type="submit"
                            value="Press me">
                            Save
                        </Button>
                    </label>
                </div>
            </form>
        </Fragment>
    );
};

export default SimpleForm;
