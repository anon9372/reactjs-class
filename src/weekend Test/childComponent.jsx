import React from 'react'

const ChildComponent = (props) => {

    let newStr = 'Hi im child'
    // console.log('name', name)
    // console.log('func', func)

    const handleClick = (data) => {
        // console.log('data', data)
        props.func(data)
    }



    return (
        <div>

            <p>{props.name}</p>
            <button onClick={() => handleClick(newStr)}>Click me</button>
        </div>
    )
}

export default ChildComponent
