import React from 'react';

type ItemType = {
    title: string,
    value: any
}

export type SelectPropsType = {
    value: any,
    onChange: (value: any) => void,
    items: ItemType[] 
}

export const Select = (props: SelectPropsType) => {
    return (
        <div>
            <div onClick={()=>{}}>{props.value}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    );
};
