import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import Tours from './Tours'

const App = () => {
    const [tours, setTours] = useState([])

    const fetchTours = async () => {
        const response = await axios.get('https://course-api.com/react-tours-project')
        // an array
        // console.log(response.data);
        setTours(response.data)
    }

    useEffect(() => {
        fetchTours()
    }, [])


    return (
        <div>
            <h2 className='title'>{tours.length} tours left</h2>
            <Tours tours={tours} setTours={setTours} />
            {
                tours.length === 0 && (<main>
                    <div className='title'>
                        <button className='btn' onClick={() => fetchTours()}>
                            refresh
                        </button>
                    </div>
                </main>)
            }
        </div>
    )
}

export default App
