import React, { useContext } from 'react'
import { Context } from '../Context/Context'

export const Home = () => {

  const contextShare = useContext(Context);

   

  return (
    <div>
      <h1>Mi pagina</h1>
      <p>Hola bienvenido <strong>{contextShare.user.name}</strong> a mi tienda</p>
    </div>
  )
}
