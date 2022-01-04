import React, { useContext, useState } from 'react';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';
import './index.css'

export const AppContext = React.createContext();

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <AppContext.Provider value={{
                isSidebarOpen,
                isModalOpen,
                openModal,
                closeModal,
                openSidebar,
                closeSidebar,
            }}>
                <Home />
                <Modal />
                <Sidebar />
            </AppContext.Provider>
        </div>
    );
}
// export const useGlobalContext = () => {
//     return useContext(AppContext)
// }
export default App;
