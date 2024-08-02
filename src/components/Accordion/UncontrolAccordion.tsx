import React, { useReducer, useState } from 'react';

type ActionType ={
    type: string
}

type StateType = {
    collapsed: boolean
}

const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED';

const reducer = (state: StateType, action : ActionType): StateType => {
    if(action.type === TOGGLE_COLLAPSED){
        return {...state, collapsed: !state.collapsed};
    }
    return state;
}

export const UncontrolAccordion = () => {

    // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [state, dispatch] = useReducer(reducer,  {collapsed: false});

    return (
        <div>
             {/* <AccordionTitle title={'Uncontrol Menu'} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}} /> */}
                <AccordionTitle title={'Uncontrol Menu'} onChange={()=>{dispatch({type: TOGGLE_COLLAPSED})}} />
                {!state.collapsed && <AccordionBody />}
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