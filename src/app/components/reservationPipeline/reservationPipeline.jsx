import React, { Fragment, useState, useRef } from 'react';
import './reservationPipeline.scss';
import fetchReservationHistory from '../../../api/reservations/fetchReservationHistory';
import CRUDTable, { Fields, Field } from 'react-crud-table';
import Moment from 'moment';
const styles = {
    container: { margin: '0 auto', width: 'fit-content' }
};

function ReservationPipeline(props) {
    const [data, setData] = useState(null);
    const reservationInput = useRef(null);

    async function fetchApi(reservationId) {
        // id -> 153 it works
        let res = await fetchReservationHistory(reservationId);
        res = res.sort(
            (a, b) =>
                new Moment(a.when).format('YYYYMMDD') -
                new Moment(b.when).format('YYYYMMDD')
        );
        setData(res);
    }
    const dateRender = ({ field }) => <input type="date" {...field} />;

    const handleSubmit = e => {
        e.preventDefault();
        const id = parseInt(reservationInput.current.value);
        fetchApi(id);
    };
    return (
        <Fragment>
            <div className="row col-12">
                <h2 className="container col-12">Insert reservation Id</h2>
                <form
                    name="reservationId"
                    onSubmit={handleSubmit}
                    style={{ margin: '0 auto' }}>
                    <input
                        type="text"
                        id="reservationId"
                        ref={reservationInput}
                    />
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
            <div style={styles.container}>
                <CRUDTable caption="reservation pipeline" items={data}>
                    <Fields>
                        <Field
                            name="movieShowingDateTime"
                            label="movieShowing"
                            sortable={false}
                        />
                        <Field
                            name="action"
                            label="status"
                            type="text"
                            sortable={false}
                        />
                        <Field
                            name="when"
                            label="when"
                            sortable={false}
                            render={dateRender}
                        />
                        <Field
                            name="who"
                            label="who"
                            sortable={false}
                            type="text"
                        />
                    </Fields>
                </CRUDTable>
            </div>
        </Fragment>
    );
}

export default ReservationPipeline;
