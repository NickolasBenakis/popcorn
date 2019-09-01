import React, { useRef, useState, Fragment, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './theaterCard.scss';
import '../moviesCard/moviesCard.scss';
import { Link } from 'react-router-dom';
import { calculateWeekdays } from '../../utils/dateUtils';
import ScheduleListCreator from './ScheduleListCreator';

function TheaterCard({ name, id, movieShowingID, movieShowDateRange }) {
    const cardElement = useRef(null);
    const [flipped, setFlipped] = useState(false);
    const [days, setDays] = useState([]);

    function flipTheCard() {
        if (flipped) {
            cardElement.current.style.transform = 'rotateY(0)';
            cardElement.current.style.transition = 'all 1s';
        } else {
            cardElement.current.style.transform = 'rotateY(180deg)';
            cardElement.current.style.transition = 'all 1s';
        }
        setFlipped(!flipped);
    }

    useEffect(() => {
        setDays(
            calculateWeekdays(movieShowDateRange[0], movieShowDateRange[1])
        );
    }, []);

    return (
        <Fragment>
            {flipped ? (
                <Card
                    className="theater-card-container relative-box static-height"
                    key={movieShowingID}
                    ref={cardElement}
                >
                    <span className="return-button" onClick={flipTheCard}>
                        <ion-icon
                            size="large"
                            name="arrow-round-forward"
                        ></ion-icon>
                    </span>
                    <Card.Body className="width-full text-left">
                        <Card.Title
                            style={{
                                padding: '10px',
                                fontSize: '11px',
                                textAlign: 'center',
                            }}
                            className="text-center"
                        ></Card.Title>
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
                                                    key={index}
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
                    ref={cardElement}
                >
                    <Card.Img
                        className="card-img"
                        variant="top"
                        src={`https://res.cloudinary.com/nickolasben/image/upload/w_450,c_scale/popcorn/${name.toLowerCase()}.png`}
                        alt="theater"
                    />
                    <Card.Body>
                        <Card.Title
                            style={{ padding: '10px', fontSize: '11px' }}
                        >
                            {name}
                        </Card.Title>
                        {typeof movieShowingID === 'number' ? (
                            <Button variant="primary" onClick={flipTheCard}>
                                Schedule
                            </Button>
                        ) : (
                            <span></span>
                        )}
                    </Card.Body>
                </Card>
            )}
        </Fragment>
    );
}

export default TheaterCard;
