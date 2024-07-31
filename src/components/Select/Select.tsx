import React, { useState, KeyboardEvent, useEffect } from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string,
    value: any
}

export type SelectPropsType = {
    value?: any,
    onChange: (value: any) => void,
    items: ItemType[] 
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(()=>{
        setHoveredElementValue(props.value);
    }, [props.value])

    const toggelItems = () => setActive(!active)
    const onItenClick = (value: any) => {
        props.onChange(value); 
        toggelItems()
    }

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) =>{
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
            for(let i = 0; i < props.items.length; i++){
                if(props.items[i].value === hoveredElementValue){
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if(pretendentElement){
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }  
        }
        if(e.key === 'Enter' || e.key === 'Escape'){
            setActive(false)
        }
        if(!selectedItem){
            props.onChange(props.items[0].value)
        }
    }

    return (
        <>
        <div className={styles.select} 
                onKeyDown={onKeyDown} 
                tabIndex={0}>
            <span className={styles.main} onClick={toggelItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(i => <div onMouseEnter={()=>{setHoveredElementValue(i.value)}} className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')} key={i.value} onClick={()=> {onItenClick(i.value)}} >{i.title}</div>)}
                </div>
            }
        </div>
        </>
    );
};

