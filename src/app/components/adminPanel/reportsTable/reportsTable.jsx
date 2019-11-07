import React, { Fragment } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'react-bootstrap';
const styles = {
    container: { margin: 'auto 20px', width: '100%' }
};
function ReportsTable() {
    return (
        <Fragment>
            <div style={styles.container}>
                <Link to="/adminPanel/">
                    <Button className="Back crud-button ">Back</Button>
                </Link>
                <section>
                    <div className="col-xs-12 container">Calendar</div>
                    <div className="reports-table"></div>
                </section>
            </div>
        </Fragment>
    );
}
export default ReportsTable;
