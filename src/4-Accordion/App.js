import React from 'react'
import './index.css'
import data from './data'
import SingleQuestion from './SingleQuestion'

const App = () => {
    return (
        <main className='container'>
            <h3>questions and answers about login</h3>
            <section className='info'>
                {
                    data.map((item) => {
                        return (
                            <div key={item.id}>
                                <SingleQuestion item={item} />
                            </div>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default App
