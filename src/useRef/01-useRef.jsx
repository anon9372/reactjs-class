import React, { useState, useRef, useEffect } from 'react'

const UseRefsBasics = () => {

    // const [value, setValue] = useState(0) 

    const refContainer = useRef(null)
    // const isMounted = useRef(false) 

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('hello i am refContainer', refContainer.current)
        console.log('hello i am refContainer', refContainer.current.value)
        const name = refContainer.current.value
        console.log('name', name)
    }

    useEffect(() => {
        refContainer.current.focus()
    }, [])

    // useEffect(() => {
    //     if (!isMounted.current) {
    //         isMounted.current = true
    //         return
    //     }
    //     console.log('re-render')
    // }, [value])


    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        Name
                    </label>
                    <input ref={refContainer} type='text' id='name' className='form-input' />
                </div>
                <button type='submit' className='btn btn-block'>
                    submit
                </button>
            </form>
            {/* <h1>Value {value}</h1>
            <button onClick={() => setValue(value + 1)} className='btn'>
                Increment
            </button> */}
        </div>
    )
}

export default UseRefsBasics
