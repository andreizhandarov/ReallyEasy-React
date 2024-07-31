
import { useState } from 'react';
import  {Select}  from './Select';
import { action } from '@storybook/addon-actions';
  
export default {
    title: 'Select stories',
    component: Select,
};

const selectMassege = action('Value changed')

export const WithValue = () => {
    const [value, setValue] = useState('1')

    return(
        <Select 
                                    onChange={setValue} 
                                    value={value} 
                                    items={[
                                        {value: '1', title: 'Minsk'},
                                        {value: '2', title: 'Kiev'},
                                        {value: '3', title: 'USA'}
                                    ]}/>
    )
} 

export const WithOutValue = () =>  {
    const [value, setValue] = useState(null)
    return(
        <Select 
                                    onChange={setValue} 
                                    value={value}
                                    items={[
                                        {value: '1', title: 'Minsk'},
                                        {value: '2', title: 'Kiev'},
                                        {value: '3', title: 'USA'}
                                    ]}/>
)}









