import React, { Fragment, useState, useEffect } from 'react';
import './searchReservation.scss';
import { useFormState } from 'react-use-form-state';
import { Button, Alert, Dropdown } from 'react-bootstrap';
import findReservations from '../../../api/reservations/findReservations';
const SearchReservation = () => {
    const [formState, { text, email }] = useFormState();
    const [reservations, setReservations] = useState([]);
    const [searchBy, setSearchBy] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [emailVal, setEmailVal] = useState('');
    const [phoneVal, setPhoneVal] = useState('');

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
            <div className="container card-group">
                <form className="card card-body">
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
                            <input
                                onKeyUp={e => {
                                    setEmailVal(e.currentTarget.value);
                                }}
                                className="black-border"
                                {...email('email')}
                                placeholder="email"
                                required
                            />
                        </label>
                    ) : searchBy === 'phone' ? (
                        <label htmlFor="phone">
                            <input
                                onKeyUp={e => {
                                    setPhoneVal(e.currentTarget.value);
                                }}
                                className="black-border"
                                {...text('phone')}
                                placeholder="phone"
                                required
                            />
                        </label>
                    ) : null}
                    {searchBy ? (
                        <div className="submit-btn">
                            <Button
                                onClick={handleSubmit}
                                disabled={
                                    searchBy === 'email'
                                        ? !emailVal.length
                                        : searchBy === 'phone'
                                        ? !phoneVal.length
                                        : true
                                }>
                                Search
                            </Button>
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
