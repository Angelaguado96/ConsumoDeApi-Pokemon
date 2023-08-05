import React from 'react'
import '../Hojas-stylos sass/Cartas.scss'

const Cartas = ({img,name}) => {
  return (

     <div className='card'>
        <p className='card__name'>{name}</p>
        <div className='card__fondo'></div>
        <img className ='card__img' src={img}alt="pokemon" />
        </div>

   
    
  )
} 

export {Cartas}



