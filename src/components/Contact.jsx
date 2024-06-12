import React , {useContext} from 'react'
import { Context } from '../Context/Context';

export const Contact = () => {
  const {user} = useContext(Context);
  return (
    <div>
      <h1>Pagina de Contacto</h1>
      <p >Nombre: <span className='text-primary'>{user.name}</span></p>
      <p >Telefono: <span className='text-primary'>{user.phone}</span></p>
      <p >correo: <span className='text-primary'>{user.username}</span></p>
    </div>
  )
}
