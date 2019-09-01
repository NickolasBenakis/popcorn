import React, { Fragment } from 'react';

const ScheduleListCreator = ({ day, time, toggleSeats }) => {
    return (
        <Fragment>
            <tr className="schedule-row">
                <td className=" text-left padding-right-20">{day}</td>
                <td
                    className="schedule-hour padding-right-20"
                    onClick={toggleSeats}
                >
                    {time}
                </td>
            </tr>
        </Fragment>
    );
};

export default ScheduleListCreator;
