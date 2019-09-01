import React, { Fragment } from 'react';

const ScheduleListCreator = ({ day, time }) => {
    return (
        <Fragment>
            <tr className="schedule-row">
                <td style={{ textAlign: 'left', paddingRight: '20px' }}>
                    {day}
                </td>
                <td style={{ paddingRight: '20px' }} className="schedule-hour">
                    {time}
                </td>
            </tr>
        </Fragment>
    );
};

export default ScheduleListCreator;
