import React from 'react'
import Tour from './Tour'

const Tours = (props) => {

    // console.log(props.tours);
    const removeTour = (id) => {
        const newTours = props.tours.filter((tour) => {
            return tour.id !== id
        })
        props.setTours(newTours)
    }
    return (
        <div>
            {
                props.tours.map((tour) => {
                    return (
                        <div key={tour.id}>
                            <Tour tour={tour} removeTour={removeTour} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tours
