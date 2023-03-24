import React, { useState } from 'react'
import ChildComponent from './childComponent'

// Parent to Child passing props
const ParentComponent = () => {
    const [value, setValue] = useState('')
    // LIFTING THE STATE UP
    let name = 'Achivers IT'

    const getMyData = (data) => {
        return setValue(data)
    }

    // function ()  -> invoking
    // function -> referring
    // () => function () -> arrow func receiving data
    return (
        <div>
            <ChildComponent name={name} func={getMyData(data)} />
            <p> {value}</p>
        </div>
    )
}

export default ParentComponent
