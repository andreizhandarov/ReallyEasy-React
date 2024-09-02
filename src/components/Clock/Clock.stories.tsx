import React from 'react';
import { Clock } from './Clock';

export default {
    title: 'Clock',
    component: Clock
}

export const BaseExampleDigitalClock = () => {
    return <Clock type='digital'/>
}

export const BaseExampleAnalogClock = () => {
    return <Clock type='analog'/>
}