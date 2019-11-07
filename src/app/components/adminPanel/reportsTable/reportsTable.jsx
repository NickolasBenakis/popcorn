import React, { Fragment, useState, useEffect } from 'react';
import './reportsTable.scss';
import { Spinner, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import CRUDTable, { Fields, Field } from 'react-crud-table';
import fetchAllReservations from '../../../../api/reports/fetchAllReservations';
import DatePicker from 'react-date-picker';
import { convertDateToInputDateForm } from '../../../utils/dateUtils';
function ReportsTable() {
    const [data, setData] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);
    const [showInvalidAlert, setShowInvalidAlert] = useState(false);
    const [showNoResultsAlert, setShowNoResultsAlert] = useState(false);

    // useEffect(() => {
    //     fetchApi();
    // }, [operation]);

    // async function fetchApi() {
    //     let res = await fetchAllReservations();
    //     setData(res);
    // }
    const styles = {
        container: { margin: 'auto 20px', width: '100%' }
    };
    const handleChangeFrom = val => {
        setStartDate(val);
    };
    const handleChangeTo = val => {
        setEndDate(val);
    };
    const handleSubmit = async () => {
        if (startDate && endDate) {
            setShowInvalidAlert(false);
            setIsLoading(true);
            const dateFrom = convertDateToInputDateForm(startDate);
            const dateTo = convertDateToInputDateForm(endDate);
            try {
                let res = await fetchAllReservations(dateFrom, dateTo);
                if (res) {
                    setIsLoading(false);
                }
                if (res.reportModels.length) {
                    setShowNoResultsAlert(false);
                    setData(res.reportModels);
                    setShowResults(true);
                } else {
                    setShowNoResultsAlert(true);
                }
                console.log(res);
            } catch (error) {
                throw new Error(error);
            }
        } else {
            setShowInvalidAlert(true);
        }
    };
    return (
        <Fragment>
            <div>
                <Link to="/adminPanel/" style={styles.container}>
                    <Button className="Back crud-button ">Back</Button>
                </Link>
                <section>
                    <div className="col-xs-12 container card-group">
                        <div className="calendars col-xs-12 card card-body">
                            <label
                                className="calendar-label"
                                htmlFor="dateFrom">
                                <span className="title">Date from</span>
                                <DatePicker
                                    id="dateFrom"
                                    onChange={handleChangeFrom}
                                    value={startDate}
                                />
                            </label>
                            <label className="calendar-label" htmlFor="dateTo">
                                <span className="title">Date to</span>
                                <DatePicker
                                    id="dateTo"
                                    onChange={handleChangeTo}
                                    value={endDate}
                                />
                            </label>
                            <div className="submit-btn">
                                {isLoading ? (
                                    <Button variant="primary" disabled>
                                        <Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        Loading...
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleSubmit}
                                        disabled={!startDate || !endDate}>
                                        Submit
                                    </Button>
                                )}
                            </div>
                            <div className="alert-wrapper ">
                                {showInvalidAlert ? (
                                    <Alert variant={'danger'}>
                                        Invalid dates
                                    </Alert>
                                ) : null}
                                {showNoResultsAlert ? (
                                    <Alert variant={'warning'}>
                                        No reports found
                                    </Alert>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    {showResults ? (
                        <CRUDTable
                            style={styles.container}
                            caption="reports"
                            fetchItems={() => Promise.resolve(data)}>
                            >
                            <Fields>
                                <Field
                                    name="auditoriumName"
                                    label="auditoriumName"
                                    hideInCreateForm
                                    sortable={false}
                                />
                                <Field
                                    name="movieShowingDate"
                                    label="movieShowingDate"
                                    sortable={false}
                                />
                                <Field
                                    name="movieShowingTime"
                                    label="movieShowingTime"
                                    sortable={false}
                                />
                                <Field
                                    name="checkedTicketsNumber"
                                    label="checkedTicketsNumber"
                                    sortable={false}
                                />
                            </Fields>
                        </CRUDTable>
                    ) : null}
                </section>
            </div>
        </Fragment>
    );
}
export default ReportsTable;
