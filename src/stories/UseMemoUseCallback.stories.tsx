import React, { useCallback } from "react"
import { useMemo, useState } from "react"

export default {
    title: 'UseMemo'
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['Reack', 'JS', 'CSS', 'HTML'])

    //function for useMemo
    // const addBook = () => {
    //     const newBooks = [...books, 'Angular ']
    //     setBooks(newBooks)
    // }

    //useMemo - function(return function)
    const memoizedAddBook = useMemo(() => {
        // return addBook
        return () => {
            const newBooks = [...books, 'Angular ']
            setBooks(newBooks)
        }
    }, [books])

    //useCallback 
    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular ']
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}

const BooksSecret = (props: {addBook: ()=> void}) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={()=> props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)

