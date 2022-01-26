import React from 'react';
import {Art} from"./Art";

export const Gallery = (props) => {
    let myStyle={
        minHeight:"70vh",
        margin:"50px auto"
    }
    return (
        <div className="container my-2" style={myStyle}> 
            <h3 className='my-3'>List of Art</h3>
            {props.works.length===0? "no art work to display!!!!!":
            props.works.map((work)=>{
                return( <Art work={work} key={work.sno}onDelete={props.onDelete} />)
            })}
        </div>
    )
}
