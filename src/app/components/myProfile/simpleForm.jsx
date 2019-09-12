import React, { Fragment } from 'react';
import { useFormState } from 'react-use-form-state';

const SimpleForm = () => {
    const [formState, { text, password, checkbox, date }] = useFormState();
    const handleSubmit = event => {
        event.preventDefault();
        console.log(formState);
    };
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>nickname</label>
                    <input {...text('name')} required />
                </div>
                <div>
                    <label>password</label>
                    <input {...password('password')} minLength="5" required />
                </div>
                <div>
                    <label>date</label>
                    <input {...date('date')} />
                </div>
                <div>
                    <label>Accept our rules</label>
                    <input {...checkbox('acceptRules')} />
                </div>
                <div>
                    <input type="submit" value="Press me" />
                </div>
            </form>
        </Fragment>
    );
};

export default SimpleForm;
