import React from 'react'
import './Experience.css'
import {MdOutlineDoubleArrow} from 'react-icons/md'
export default function Experience({title,dates,duties,company}) {
    
  return (
    <div className='container'>
         <div className="title">{title}</div> 
         <div className="subtitle">{company}</div>
         <div className="date">{dates}</div>
         <div className="details">
            {duties.map(d =>
                 <div className="exp-details">
                  <MdOutlineDoubleArrow className="icon"/>
                 <p>{d}</p>
                 </div>
            )}
         <button className='btn-info'>More Info</button>
         </div>  

    </div>
  )
}
