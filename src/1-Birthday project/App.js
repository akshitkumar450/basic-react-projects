import React, { useState } from 'react'
import data from './data'
import './App.css';
import List from './List';

function App() {
  const [person, setPerson] = useState([data])

  return (
    <main className="App">
      <section className='container'>
        <h3>{person.length} birthday today</h3>
        <List person={person} />
        {
          person.length === 0 ?
            (<button onClick={() => setPerson(data)} >refresh</button>) :
            (<button onClick={() => setPerson([])} >clear all</button>)
        }
      </section>
    </main>
  );
}

export default App;
