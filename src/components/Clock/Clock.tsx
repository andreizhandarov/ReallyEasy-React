import React, { useEffect, useState } from 'react';
import { AnalogClock } from './AnalogClock';

const getTwoDigitaString = (num: number) => num < 10 ? '0' + num : num

type ClockType = {type : 'analog' | 'digital'} 

export const Clock = (props: ClockType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(()=>{
            setDate(new Date())
        }, 1000)
        return () =>{
            clearInterval(intervalID)
        }
    }, [])
    
    return (
        <div>
            {props.type === 'digital' ? (
                <div>
                    <span>{getTwoDigitaString(date.getHours())}</span>
                    :
                    <span>{getTwoDigitaString(date.getMinutes())}</span>
                    :
                    <span>{getTwoDigitaString(date.getSeconds())}</span>
                </div>
            ) : <AnalogClock />}
        </div>
    );
};

