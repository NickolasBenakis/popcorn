import React, { useRef, useState, Fragment, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './theaterCard.scss';
import '../moviesCard/moviesCard.scss';
import {
    calculateWeekdays,
    convertToStandardTime,
    convertDate
} from '../../utils/dateUtils';
import ScheduleListCreator from './ScheduleListCreator';

function TheaterCard({
    name,
    id,
    movieShowingID,
    movieShowDateRange,
    movieScreeningTime,
    toggleSeats,
    handleTime,
    handleShowing,
    auditorium,
    movieShow
}) {
    const cardElement = useRef(null);
    const [flipped, setFlipped] = useState(false);
    const [days, setDays] = useState([]);
    const [screeningTime, setScreeningTime] = useState('');

    function flipTheCard() {
        if (flipped) {
            cardElement.current.style.transform = 'rotateY(0';
            cardElement.current.style.transition =
                '0.8s cubic-bezier(0.75, 0, 0.85, 1);';
        } else {
            cardElement.current.style.transform = 'rotateY(-180deg)';
            cardElement.current.style.transition =
                '0.8s cubic-bezier(0.75, 0, 0.85, 1);';
        }
        setFlipped(!flipped);
    }

    const selectShowing = () => handleShowing(auditorium, movieShow);

    useEffect(() => {
        setDays(
            calculateWeekdays(movieShowDateRange[0], movieShowDateRange[1])
        );
        setScreeningTime(convertToStandardTime(movieScreeningTime));
    }, []);

    const doesImageExists = imgName => {
        switch (imgName && imgName.toLowerCase()) {
            case 'earth':
            case 'jupiter':
            case 'mars':
                return true;
            default:
                return false;
        }
    };
    return (
        <Fragment>
            {flipped ? (
                <Card
                    className="theater-card-container relative-box static-height"
                    key={movieShowingID}
                    ref={cardElement}>
                    <span className="return-button" onClick={flipTheCard}>
                        <ion-icon
                            size="large"
                            name="arrow-round-forward"></ion-icon>
                    </span>
                    <Card.Body className="width-full text-left">
                        <Card.Title className="text-center card-title"></Card.Title>
                        <div className="container">
                            <table className="width-full transformerY table">
                                <thead className="no-border">
                                    <tr>
                                        <th className="no-border">Days</th>
                                        <th className="no-border">Hours</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {days.length ? (
                                        days.map((day, index) => {
                                            return (
                                                <ScheduleListCreator
                                                    day={day}
                                                    time={screeningTime}
                                                    key={index}
                                                    toggleSeats={toggleSeats}
                                                    handleTime={handleTime}
                                                />
                                            );
                                        })
                                    ) : (
                                        <span></span>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </Card.Body>
                </Card>
            ) : (
                <Card
                    className="theater-card-container"
                    key={movieShowingID}
                    ref={cardElement}>
                    <Card.Img
                        className="card-img-theater "
                        variant="top"
                        src={
                            doesImageExists(name)
                                ? `https://res.cloudinary.com/nickolasben/image/upload/w_450,c_scale/popcorn/${name.toLowerCase()}.png`
                                : `https://res.cloudinary.com/nickolasben/image/upload/w_450,c_scale/popcorn/mockTheater.jpg`
                        }
                        alt="theater"
                    />
                    <Card.Body>
                        <Card.Title className="text-center card-title">
                            Theater : <strong>{name}</strong>
                            {movieShowingID && days.length ? (
                                <div className="date-range-tag">
                                    <strong>{days[0]}</strong>
                                    <strong>{days[days.length - 1]}</strong>
                                </div>
                            ) : null}
                        </Card.Title>
                        {typeof movieShowingID === 'number' ? (
                            <Button
                                variant="primary"
                                onClick={() => {
                                    flipTheCard();
                                    selectShowing();
                                }}>
                                Schedule
                            </Button>
                        ) : null}
                    </Card.Body>
                </Card>
            )}
        </Fragment>
    );
}

export default TheaterCard;
