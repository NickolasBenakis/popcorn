import React from 'react';
import getReservationRetry from '../../../api/retryPattern/getReservationRetry';

function RetryPattern() {
    let counter = 1;

    const handlePattern = async () => {
        if (counter !== 4) {
            try {
                const res = await getReservationRetry(counter);
                console.log(res);
            } catch (error) {
                counter++;
                await handlePattern();
            }
        }
    };

    return (
        <div className="col-12 row container" style={{ margin: '0 auto' }}>
            <div className="col-12 row container">
                <h2 className="">This is the Retry pattern.</h2>
            </div>
            <div style={{ margin: '0 auto' }}>
                <button
                    className="btn btn-primary w-100"
                    onClick={handlePattern}>
                    Click!
                </button>
                <h2 style={{ margin: '0 auto' }}>🤯🤯🤯🤯🤯🤯</h2>
                <small>
                    <code>
                        {'<secret text=" '}open the console ! {' " />'}👩‍💻👨‍💻
                    </code>
                </small>
            </div>
        </div>
    );
}

export default RetryPattern;
