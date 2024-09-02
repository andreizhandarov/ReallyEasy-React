import React, { useEffect } from "react"
import { useState } from "react"

export default {
    title: 'UseEffect demo'
}



export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => { 
        console.log('useEffect every render')
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter rend')
        document.title = counter.toString();
    }, [counter])

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>counter +</button><br/>
        <button onClick={() => {setFake(fake + 1)}}>fake +</button><br/>
        Hello, {counter}<br/>
        Hello, {fake}
    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState('')

    console.log('SetTimeoutExample')
    // setTimeout(() => {
    //     console.log('setTimeout')
    //     document.title = counter.toString();
    // }, 1000);


//----------------------------------
    useEffect(() => { 
        
        // setTimeout(() => {
        //     console.log('setTimeout')
        //     document.title = counter.toString();
        // }, 1000);

        const intervalId = setInterval(() => {
            let d = new Date();
            let s = d.getSeconds();
            let m = d.getMinutes();
            let h = d.getHours();
            let timer = ("0" + h).slice(-2) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2);
            return setCounter (timer);
        }, 1000);
        return () => {clearInterval(intervalId)}
    },[])

    return <>
        {/* <button onClick={() => {setCounter(counter + 1)}}>counter +</button><br/>
        <button onClick={() => {setFake(fake + 1)}}>fake +</button><br/> */}
        Hello counter: {counter}<br/>

        
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('ResetEffectExample rendering')

    useEffect(() => { 
        console.log('useEffect: ' + counter)
        return () => {
            console.log('reset Effect')
        }
    },[counter])

    const increase = () => {setCounter(counter + 1)}

    return <>
        Hello counter: {counter} <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendering: ' + text)

    useEffect(() => { 

        const handler = (e: KeyboardEvent) =>{
            console.log(e.key)
            // setText((state) => state + e.key) --без зависимости text
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler )
        }
    },[text])

    return <>
        Typed text: {text} 
    </>
}
