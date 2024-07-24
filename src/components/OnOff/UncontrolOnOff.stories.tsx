
import  {UncontrolOnOff}  from './UncontrolOnOff';
import { action } from '@storybook/addon-actions';

export default {
    title: 'UncontrolOnOff stories',
    component: UncontrolOnOff,
};

const callBack = action('onChange'); 

export const UncontrolOnOffMode = () => {
    return <UncontrolOnOff defaultOn={true} onChange={callBack}/>
};

