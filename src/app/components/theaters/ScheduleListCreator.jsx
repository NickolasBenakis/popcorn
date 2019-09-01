import React, { Fragment } from 'react';

const ScheduleListCreator = ({ day }) => {
    return (
        <Fragment>
            <tr className="schedule-row">
                <td style={{ textAlign: 'left', paddingRight: '20px' }}>
                    {day}
                </td>
                <td style={{ paddingRight: '20px' }} className="schedule-hour">
                    8:30
                </td>
                <td style={{ paddingRight: '20px' }} className="schedule-hour">
                    8:30
                </td>
            </tr>
        </Fragment>
    );
};

export default ScheduleListCreator;
