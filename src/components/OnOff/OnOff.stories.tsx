import { useState } from 'react';
import  {OnOff}  from './OnOff';
import { action } from '@storybook/addon-actions';
  
export default {
    title: 'OnOff stories',
    component: OnOff,
};

const callback = action('clisked on or off');

export const OffMode = () => {
    return <OnOff on={false} onChange={callback}/>
};

export const OnMode = () => {
    return <OnOff on={true} onChange={callback}/>
};

export const ModeChange = () => {
    const [on, setOn] = useState<boolean>(false);
    return <OnOff on={on} onChange={setOn}/>
};









