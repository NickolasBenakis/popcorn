import React, { Fragment, useState, useEffect } from 'react';
import './searchReservation.scss';
import { useFormState } from 'react-use-form-state';
import { Button, Alert, DropdownButton, Dropdown } from 'react-bootstrap';
import findReservations from '../../../api/reservations/findReservations';
const SearchReservation = () => {
    const [formState, { text, email }] = useFormState();
    const [reservations, setReservations] = useState([]);
    const [searchBy, setSearchBy] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        setShowAlert(false);
    }, [searchBy]);

    const handleSubmit = e => {
        e.preventDefault();
        let payload = {};
        switch (searchBy) {
            case 'email':
                payload.UserEmail = formState.values.email;
                break;
            case 'phone':
                payload.UserPhone = formState.values.phone;
                break;
            default:
                break;
        }
        fetchReservations(payload);

        console.log(payload);
    };

    const fetchReservations = async payload => {
        try {
            let res = await findReservations(payload);
            console.log(res);
            res === undefined ? setShowAlert(true) : setShowAlert(false);
            setReservations(res || []);
        } catch (error) {
            throw new Error(error);
        }
    };
    return (
        <Fragment>
            <h1 className="header col-12 col-sm-4 pre-wrap">
                Find today's reservations
            </h1>
            <div className="col-xs-12 container card-group">
                <form className="col-xs-12 card card-body">
                    <div className="select-row">
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic">
                                Select Search
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick={e => setSearchBy('email')}>
                                    Email
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={e => setSearchBy('phone')}>
                                    Phone
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    {searchBy === 'email' ? (
                        <label htmlFor="email">
                            <span className="title"> Email</span>
                            <input
                                className="black-border"
                                {...email('email')}
                            />
                        </label>
                    ) : searchBy === 'phone' ? (
                        <label htmlFor="phone">
                            <span className="title"> Phone</span>
                            <input
                                className="black-border"
                                {...text('phone')}
                            />
                        </label>
                    ) : null}
                    {searchBy ? (
                        <div className="submit-btn">
                            <Button onClick={handleSubmit}>Search</Button>
                        </div>
                    ) : null}
                    {showAlert ? (
                        <Alert variant={'warning'}>
                            No reservations found!
                        </Alert>
                    ) : null}
                </form>
            </div>
            <br></br>
            {reservations.length ? (
                <div className="col-xs-12 container card-group">
                    <div className="col-xs-12 card card-body">Info...</div>
                </div>
            ) : null}
        </Fragment>
    );
};

export default SearchReservation;
