
import  {UncontrolRaiting, RatingValueType}  from './UncontrolRating';
import { action } from '@storybook/addon-actions';

export default {
    title: 'UncontrolRating stories',
    component: UncontrolRaiting,
};

const callback = action('Rating changet')

export const UncontrolRaitingMode = () =>  <UncontrolRaiting  defaultValue={0} onChange={callback}/>;
export const UncontrolRaitingMode1 = () =>  <UncontrolRaiting  defaultValue={1} onChange={callback}/>;
export const UncontrolRaitingMode2 = () =>  <UncontrolRaiting  defaultValue={2} onChange={callback}/>;
export const UncontrolRaitingMode3 = () =>  <UncontrolRaiting  defaultValue={3} onChange={callback}/>;
export const UncontrolRaitingMode4 = () =>  <UncontrolRaiting  defaultValue={4} onChange={callback}/>;
export const UncontrolRaitingMode5 = () =>  <UncontrolRaiting  defaultValue={5} onChange={callback}/>;










