import React, { useContext } from 'react';
import { AppContext } from './App';

const Modal = () => {
    const { isModalOpen, closeModal } = useContext(AppContext);
    return (
        <div
            className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
            }
        >
            <div className='modal-container'>
                <h3>modal content</h3>
                <button className='close-modal-btn' onClick={closeModal}>
                    close
                </button>
            </div>
        </div>
    );
};

export default Modal;
