import React, { useContext } from 'react'
import { Context } from '../Context/Context';


export const About = () => {

  const objectContext = useContext(Context);

  return (
    <div>
      <h1>Pagina de acerca de nosotros</h1>
      <p>DAtos de cliente</p>
      <p> <pre>{JSON.stringify(objectContext.user)}</pre></p>
    </div>
  )
}
