import React from 'react'
import '../Hojas-stylos sass/Button.scss';

function Butoon({ icon, handleClick }) {
  return (
    <>
      <div className='button_Box'>
        <button
          className='ButtonDeMando'
          onClick={handleClick}
        >{icon}
        </button>
        <div className='box__shadow'></div>
      </div>
    </>

  )
}
export { Butoon };
