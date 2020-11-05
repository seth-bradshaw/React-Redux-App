import React from 'react'

export default function Card(props) {
    console.log(props.doggo)
    return (
        <div className='card'>
            <img className='cardImg' src={props.doggo} alt='andrew is in a porno'></img>
        </div>
    )
}
