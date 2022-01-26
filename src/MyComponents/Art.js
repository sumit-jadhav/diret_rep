import React from 'react'

export const Art = ({work,onDelete}) => {
    return (
        <>
        <div>
            <h3> {work.title}</h3>
            <p>{work.desc}</p>
            <button className="btn btn-sm btn-danger"onClick={()=>{onDelete(work)}}>Delete</button>
        </div>
        <hr/>
        </>
    )
}
