import React from 'react'

const Display = ({ title, dogs }) => {

    const cleanDogs = dogs.map(dog => {
        return (
            <img src={dog} alt='dog' style={{width: '200px', height: '200px'}}/>
        )
    })

    return (
        <div>
            <h2>{title}</h2>
            {cleanDogs}
        </div>
    )
}

export default Display
