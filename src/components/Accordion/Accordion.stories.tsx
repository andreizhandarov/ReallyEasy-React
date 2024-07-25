import  {Accordion}  from './Accordion';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';
  
export default {
    title: 'Accordion stories', 
    component: Accordion
};

const OpenedAccordionHandler = action('onChange');
const onClickCallback = action('some item was clicked');  

export const CollapsedAccordion = () =>{
    return   <Accordion 
                titleValue={'Menu Closed'} 
                collapsed={true} 
                onChange={OpenedAccordionHandler}
                items={[]}
                onClick={onClickCallback}
  />
}

export const OpenedAccordion = () =>{
    return   <Accordion 
                titleValue={'Menu Opened'} 
                collapsed={false} 
                onChange={OpenedAccordionHandler}
                items={[{title:'Dimych', value: 1}, 
                        {title: 'Andrew', value: 2}, 
                        {title: 'Vlad', value: 3}, 
                        {title: 'Hanna', value: 4}]}
                onClick={onClickCallback}
  />
}

export const AccordionChange = () =>{
    const [collapsed, setCollapsed] = useState(false);
    return   <Accordion 
                titleValue={'Menu'} 
                collapsed={collapsed} 
                onChange={() => {setCollapsed(!collapsed)}}
                items={[{title:'Dimych', value: 1}, 
                        {title: 'Andrew', value: 2}, 
                        {title: 'Vlad', value: 3}, 
                        {title: 'Hanna', value: 4}]}
                onClick={onClickCallback}
  />
}

