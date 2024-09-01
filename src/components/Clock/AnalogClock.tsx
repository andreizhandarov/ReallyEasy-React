import React, { useEffect, useState } from 'react';

export const AnalogClock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const hourHandStyle = {
        transform: `rotate(${((hour % 12) / 12) * 360 + ((minute / 60) * 30)}deg)`,
        transformOrigin: 'center',
    };

    const minuteHandStyle = {
        transform: `rotate(${(minute / 60) * 360 + ((second / 60) * 6)}deg)`,
        transformOrigin: 'center',
    };

    const secondHandStyle = {
        transform: `rotate(${(second / 60) * 360}deg)`,
        transformOrigin: 'center',
    };

    return (
        <div style={{ position: 'relative', width: '200px', height: '200px' }}>
            <svg width="100%" height="100%" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="98" stroke="black" strokeWidth="2" fill="none" />
                <line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="20"
                    stroke="black"
                    strokeWidth="4"
                    style={hourHandStyle}
                />
                <line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="10"
                    stroke="black"
                    strokeWidth="2"
                    style={minuteHandStyle}
                />
                <line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="10"
                    stroke="red"
                    strokeWidth="1"
                    style={secondHandStyle}
                />
            </svg>
        </div>
    );
};