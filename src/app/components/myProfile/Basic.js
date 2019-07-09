import React, { Fragment } from 'react';
import { Formik, Field, Form } from 'formik';

const Basic = () => (
    <Fragment>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
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
                            <span className="col-sm-3">
                                <label htmlFor="firstName" className="labels">
                                    First Name
                                </label>
                            </span>
                            <span className="col-sm-9">
                                <Field name="firstName" placeholder="Jane" />
                            </span>
                        </div>
                        <div className="row space-down">
                            <span className="col-sm-3">
                                <label htmlFor="lastName" className="labels">
                                    Last Name
                                </label>
                            </span>
                            <span className="col-sm-9">
                                <Field name="lastName" placeholder="Doe" />
                            </span>
                        </div>
                        <div className="row space-down">
                            <span className="col-sm-3">
                                <label htmlFor="email">Email</label>
                            </span>
                            <span className="col-sm-9">
                                <Field
                                    name="email"
                                    placeholder="...@..."
                                    type="email"
                                />
                            </span>
                        </div>
                        <div className="row space-down">
                            <span className="col-sm-3">
                                <label htmlFor="gender">Gender</label>
                            </span>
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
                    <button type="submit">Submit</button>
                </Form>
            )}
        />
    </Fragment>
);

export default Basic;
