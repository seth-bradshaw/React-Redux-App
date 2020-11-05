import React, {useEffect} from 'react'
import {getDoggoData} from '../actions'
import {connect} from 'react-redux'
import Card from './Card'

const DoggoCards = (props) => {

    useEffect(()=> {
        props.getDoggoData() 
    }, [])

    return (
        <div className='cardsDiv'>
            <h1>Cutie Doggos</h1>
            {props.isLoading && <p>The doggos are wagging their tails waiting for their human...</p>}
            {props.doggoData.map(doggo => <Card doggo={doggo}/>)}
            {props.error && <p>The doggos are sad because they weren't received. Error: {props.error}</p>}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        doggoData: state.doggoData,
        error: state.error
    }
}

export default connect(mapStateToProps, {getDoggoData})(DoggoCards)