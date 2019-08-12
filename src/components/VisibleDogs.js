import React from 'react'

//pass props to visible dogs component
const VisibleDogs = (props) => {
    console.log("visible dogs", props)
    return (
        <div>


            <h1>Breed: { props.name }</h1>
            <p>Purpose: { props.purpose }</p>

            {/* put breed's origin in p tag */ }

        </div>
    )
}

export default VisibleDogs