import React, { useState } from 'react'

const Tour = (props) => {

    const [more, setMore] = useState(false)

    if (!props.tour) {
        return <h1>loading..</h1>
    }

    return (
        <div className="single-tour">
            <img src={props.tour.image} alt={props.tour.name} width='20' height='200' />
            <footer>
                <div className="tour-info">
                    <h4>{props.tour.name}</h4>
                    <h4 className="tour-price">${props.tour.price}</h4>
                    <p>
                        {more ? props.tour.info : `${props.tour.info.substring(0, 200)}...`}
                        <button onClick={() => setMore(!more)}>
                            {more ? 'show less' : 'show more'}
                        </button>
                    </p>
                </div>

                <button className="delete-btn" onClick={() => props.removeTour(props.tour.id)}>not interested</button>
            </footer>
        </div>

    )
}

export default Tour
