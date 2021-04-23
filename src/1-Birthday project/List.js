import React from 'react'

const List = (props) => {
    return (
        <div>
            {props.person.map((man) => {
                return (
                    <div className='person' key={man.id}>
                        <img src={man.image} />
                        <div>
                            <h4>{man.name}</h4>
                            <p>{man.age}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default List
