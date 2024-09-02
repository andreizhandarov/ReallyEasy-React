import React, { useEffect, useState } from 'react';
import { AnalogClock } from './AnalogClock';
import { DigitalClock } from './DigitalClock';


export type ClockViewPropsType = {
    date: Date
}

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
            {props.type === 'digital' ? <DigitalClock date={date}/> : <AnalogClock date={date}/>}
        </div>
    );
};

