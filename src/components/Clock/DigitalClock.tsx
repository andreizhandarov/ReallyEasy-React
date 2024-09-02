import React from 'react';
import { ClockViewPropsType } from './Clock';

const getTwoDigitaString = (num: number) => num < 10 ? '0' + num : num

export const DigitalClock: React.FC<ClockViewPropsType> = ({date}) => {

    return (
        <div>
            <span>{getTwoDigitaString(date.getHours())}</span>
            :
            <span>{getTwoDigitaString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitaString(date.getSeconds())}</span>
        </div>
    );
};

