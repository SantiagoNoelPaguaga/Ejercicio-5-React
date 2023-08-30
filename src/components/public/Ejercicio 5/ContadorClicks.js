import React, { useEffect, useState } from 'react'

export const ContadorClicks = () => {

  const [contador, setContador] = useState(0)

  return (
    <div className='text-center'>
      <h1>Contador de Clicks</h1>
      <hr />

      <p className='fs-1 fw-bold'>{ contador }</p>

      <button
        className='btn btn-primary me-3'
        onClick={ () => {
          setContador(contador + 1);
        }}
        
      >
        +1
      </button>
      <button
        className='btn btn-primary'
        onClick={ () => {
          setContador(contador - 1);
        }}
        
      >
        -1
      </button>
    </div>
  )
}
