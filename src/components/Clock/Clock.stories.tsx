import React, { useState } from 'react';
import { Clock } from './Clock';

export default {
    title: 'Clock',
    component: Clock
}

export const BaseExample = () => {

    return (
        <>
            <Clock type='digital'/>
            <Clock type='analog'/>
        </>

)
}