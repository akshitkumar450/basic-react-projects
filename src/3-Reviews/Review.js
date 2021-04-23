import React, { useState } from 'react'
import data from './data'

const Review = () => {

    const [index, setIndex] = useState(0)
    // default review
    const { name, id, image, job, text } = data[index]

    const randomReview = () => {
        let random = Math.floor(Math.random() * data.length)
        // console.log(random, index);
        if (random === index) {
            random = index + 1
        }
        setIndex(random)
    }
    // data.length  =4
    const leftReview = () => {
        if (index === 0) {
            setIndex(data.length - 1)
        }
        else setIndex(index - 1)
        console.log(index, data.length - 1);
    }

    const rightReview = () => {
        if (index >= data.length - 1) {
            return setIndex(0)
        }
        else setIndex(index + 1)
        // console.log(index, data.length - 1);

    }

    return (
        <div>
            <div>
                <h2>{name}-{job}  </h2>
                <img src={image} alt={id} width='200' />
                <p>{text}</p>
                <div>
                    <button onClick={leftReview}>left</button>
                    <button onClick={randomReview}>random</button>
                    <button onClick={rightReview}>right</button>
                </div>

            </div>
        </div>
    )
}

export default Review
