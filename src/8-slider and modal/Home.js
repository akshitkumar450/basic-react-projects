import React, { useContext } from 'react';
import { AppContext } from './App'

const Home = () => {
    // const { openSidebar, openModal } = useGlobalContext();
    const { openSidebar, openModal } = useContext(AppContext)
    return (
        <main>
            <button onClick={openSidebar} className='sidebar-toggle'>
                close
            </button>
            <button onClick={openModal} className='btn'>
                show modal
      </button>
        </main>
    );
};

export default Home;
