
import React, { Component } from 'react'

const FilterForm = (props) => {
    
    const handleChange = (event) => {
        props.filterDogs(event.target.value)
    }

    return (
        <div>
            <label>Filter by Dog: </label>
            <input type="text" id="filter"
                onChange={ handleChange }
            />
        </div>
    )
}


export default FilterForm