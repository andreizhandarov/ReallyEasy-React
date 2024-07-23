import  {Accordion}  from './Accordion';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';
  
export default {
    title: 'Accordion stories', 
    component: Accordion
};

const OpenedAccordionHandler = action('onChange'); 

export const CollapsedAccordion = () =>{
    return   <Accordion 
                titleValue={'Menu Closed'} 
                collapsed={true} 
                onChange={OpenedAccordionHandler}
  />
}

export const OpenedAccordion = () =>{
    return   <Accordion 
                titleValue={'Menu Opened'} 
                collapsed={false} 
                onChange={OpenedAccordionHandler}
  />
}

export const AccordionChange = () =>{
    const [collapsed, setCollapsed] = useState(false);
    return   <Accordion 
                titleValue={'Menu'} 
                collapsed={collapsed} 
                onChange={() => {setCollapsed(!collapsed)}}
  />
}

