import React, { useState } from 'react'

const SingleQuestion = (props) => {
    const [open, setOpen] = useState(false)

    return (
        <article className='question'>
            <header>
                <p>{props.item.title}</p>
                <button className='btn'
                    onClick={() => setOpen(!open)}>{
                        open
                            ? <span>-</span>
                            : <span>+</span>
                    }
                </button>
            </header>
            {open && <p>{props.item.info}</p>}
        </article>
    )
}

export default SingleQuestion
