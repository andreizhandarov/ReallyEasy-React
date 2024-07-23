import React, { useState } from 'react';

export const UncontrolAccordion = () => {

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);

    return (
        <div>
             <AccordionTitle title={'Uncontrol Menu'} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}} />
             {!accordionCollapsed && <AccordionBody />}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string,
    onChange: () => void
};

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return(
        <h3 onClick={props.onChange}>-- {props.title} --</h3>
    )
};

const AccordionBody = () => {
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
};