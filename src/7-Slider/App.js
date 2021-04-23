import React, { useEffect, useState } from 'react'
import data from './data'
import './index.css'

const App = () => {
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, people])

    // auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(index + 1)
        }, 3000)
        return () => {
            clearInterval(timer)
        }
    }, [index])

    return (
        <section className='section'>
            <div className='title'>
                <h1>
                    <span>/</span> reviews
                </h1>
            </div>
            <div className='section-center'>
                {
                    people.map((person, personIndex) => {

                        let position = 'nextSlide'
                        if (personIndex === index) {
                            position = 'activeSlide'
                        }
                        if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                            position = 'lastSlide'
                        }

                        return (
                            <article key={personIndex} className={position}>
                                <img src={person.image} className='person-img' />
                                <p className='title'>{person.title}</p>
                                <p className='text'>{person.quote}</p>
                                <h4>{person.name}</h4>
                            </article>
                        )
                    })
                }
                <button className='prev' onClick={() => setIndex(index - 1)}>prev</button>
                <button className='next' onClick={() => setIndex(index + 1)}>next</button>
            </div>
        </section>
    )
}

export default App
