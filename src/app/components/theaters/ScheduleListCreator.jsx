import React, { Fragment } from 'react';
import moment from 'moment';
import { convertFromStandardToUTC } from '../../utils/dateUtils';

const ScheduleListCreator = ({ day, time, toggleSeats, handleTime }) => {
    return (
        <Fragment>
            <tr className="schedule-row">
                <td className=" text-left padding-right-20">{day}</td>
                <td
                    className="schedule-hour padding-right-20"
                    onClick={() => {
                        handleTime(convertFromStandardToUTC(day, time));
                        toggleSeats();
                    }}
                >
                    {time}
                </td>
            </tr>
        </Fragment>
    );
};

export default ScheduleListCreator;
