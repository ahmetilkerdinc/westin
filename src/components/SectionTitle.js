import React from 'react'

export const SectionTitle = (props) => {
    return (
        <div className="title-box">
         <h6>{props.desc}</h6>
         <h3>{props.title}</h3>
         <span>{props.title}</span>
         </div>
    )
}

export default SectionTitle;