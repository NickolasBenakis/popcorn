import React, { Fragment, useRef, useState } from 'react';
import { convertFromStandardToUTC } from '../../utils/dateUtils';

const ScheduleListCreator = ({ day, time, toggleSeats, handleTime }) => {
    const rowElement = useRef(null);
    const hourElement = useRef(null);
    const [clicked, setClicked] = useState(false);

    const makeColorToStick = () => {
        rowElement.current.classList.add('active-row');
        hourElement.current.classList.add('active-hour');
        if (clicked) {
            rowElement.current.classList.remove('active-row');
            hourElement.current.classList.remove('active-hour');
        }
    };
    const handleClick = () => {
        handleTime(convertFromStandardToUTC(day, time));
        makeColorToStick();
        toggleSeats();
        setClicked(!clicked);
    };

    return (
        <Fragment>
            <tr ref={rowElement} className="schedule-row">
                <td className=" text-left padding-right-20">{day}</td>
                <td
                    ref={hourElement}
                    className="schedule-hour padding-right-20"
                    onClick={handleClick}>
                    {time}
                </td>
            </tr>
        </Fragment>
    );
};

export default ScheduleListCreator;
