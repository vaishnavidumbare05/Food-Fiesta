import React from 'react'
import "./foodcard.css"
function foodcard({title,description,price}) {
   // const{title,description}=props
  return (
    <div className='food-card'>
        <h1 className='title'>{title}</h1>
        <p>{description}</p>
        <b>{price}</b>
        </div>
 )
}
export default foodcard