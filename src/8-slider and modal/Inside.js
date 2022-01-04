import React, { useContext } from 'react'
import { AppContext } from './context'
const Inside = () => {
    const { isModalOpen } = useContext(AppContext)
    return (
        <div>
            iside
        </div>
    )
}

export default Inside
