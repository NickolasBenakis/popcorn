import React, { Fragment } from 'react';
import { Formik, Field, Form } from 'formik';

const Basic = () => (
    <Fragment>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: ''
            }}
            onSubmit={values => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
            render={() => (
                <Form>
                    <div className="form-container col-md-12">
                        {/* <div className="labels">
                            <label htmlFor="firstName">First Name</label>
                            <label htmlFor="lastName">Last Name</label>
                            <label htmlFor="email">Email</label>
                            <label htmlFor="gender">Gender</label>
                        </div> */}
                        {/* <div className="fields">
                            <Field name="firstName" placeholder="Jane" />
                            <Field name="lastName" placeholder="Doe" />
                            <Field
                                name="email"
                                placeholder="...@..."
                                type="email"
                            />
                            <Field
                                name="gender"
                                component="select"
                                placeholder="Gender"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Field>
                        </div> */}
                        <div className="row space-down">
                            <div className="col-label">
                                <label htmlFor="firstName" className="labels">
                                    First Name
                                </label>
                            </div>
                            <div className="col-input">
                                <Field name="firstName" placeholder="Jane" />
                            </div>
                        </div>
                        <div className="row space-down">
                            <div className="col-label">
                                <label htmlFor="lastName" className="labels">
                                    Last Name
                                </label>
                            </div>
                            <div className="col-input">
                                <Field name="lastName" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="row space-down">
                            <div className="col-label">
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="col-input">
                                <Field
                                    name="email"
                                    placeholder="...@..."
                                    type="email"
                                />
                            </div>
                        </div>
                        <div className="row space-down">
                            <div className="col-label">
                                <label htmlFor="gender">Gender</label>
                            </div>
                            <div className="col-input">
                                <Field
                                    name="gender"
                                    component="select"
                                    placeholder="Gender"
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </Field>
                            </div>
                        </div>
                        <button className="btn btn-secondary" type="submit">
                            Save
                        </button>
                    </div>
                </Form>
            )}
        />
    </Fragment>
);

export default Basic;
