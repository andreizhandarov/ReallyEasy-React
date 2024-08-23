import React, { useCallback } from "react"
import { useMemo, useState } from "react"

export default {
    title: 'UseSatet demo'
}

function generateData() {
    console.log('generateData')
    return 3284982732;
}

export const Example1 = () => {
    console.log('Example1')
    // const initValue = useMemo(generateData, [])
    // const [counter, setCounter] = useState(initValue)

    const [counter, setCounter] = useState(generateData)

    // const changer = (state: number) => {
    //     return state + 1;
    // }

    return <>
        {/* <button onClick={() => {setCounter(counter + 1)}}>+</button> */}
        <button onClick={() => {setCounter(state => state + 1)}}>+</button>
        {counter}
    </>
}

