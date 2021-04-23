import React, { useState } from 'react'
import data from './data'
const App = () => {

    const [input, setInput] = useState(0)
    const [para, setPara] = useState([])

    const onFormSubmit = (e) => {
        e.preventDefault();
        const count = parseInt(input)
        // console.log(count, data.length);
        if (count >= 0 && count <= data.length) {
            const newPara = data.slice(0, count)
            setPara(newPara)
        } else if (count < 0 || count > data.length) {
            setPara([data[0]])
        }

        // ANOTHER approach

        // let paras = []
        // for (let i = 0; i < input; i++) {
        //     paras.push(data[i])
        // }
        // console.log(paras, paras.length);
        // setPara(paras)
        // console.log('***********');
        // console.log(para, para.length);
    }

    return (
        <main>
            <h2>tired of boring lorem ipsum?</h2>
            <form onSubmit={onFormSubmit}>
                <input
                    type='number'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button>generate</button>
            </form>
            {
                para.map((item, idx) => {
                    return <p key={idx}>{item}</p>
                })
            }
        </main>
    )
}

export default App
