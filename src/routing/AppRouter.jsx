import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from '../components/Home'
import { Articles } from '../components/Articles'
import { Contact } from '../components/Contact'
import { About } from '../components/About'
import { Login } from '../components/Login'
import { ErrorPage } from '../components/ErrorPage'
import { Context } from '../Context/Context'
import logo from '../assets/LOGOSTORE.png'
import { DetailArticle } from '../components/DetailArticle'

export const AppRouter = () => {
const { user,setUser } = useContext(Context)



  return (
    <Router>
      {/* Menu de navegacion */}
      <header className='header-nav'>
        <nav>
          <div className='logo'>
            <img src={logo} alt="logo" className='logo-img' />
          </div>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/articulos">Articulo</NavLink>
            </li>
            <li>
              <NavLink to="/acerca-de">Acerca de</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>

              {user.hasOwnProperty("username") && user.username !== null ? 
                (
                 <>
                    <li><NavLink to="/login">{user.username}</NavLink></li>
                    <li><a href='/' onClick={e=>{
                      e.preventDefault();
                      setUser({})
                    }}>Cerrar Sesion</a></li>
                 </>
                ):(
                  <li><NavLink to="/login">Identificate</NavLink></li>
                )
              }
          </ul>
        </nav>
      </header>
      

      <section className='content'>
        {/* configurar las ruta */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/inicio' element={<Home />}></Route>
          <Route path='/articulos' element={<Articles />}></Route>
          <Route path='/article/:id' element={<DetailArticle />}></Route>
          <Route path='/acerca-de' element={<About />}></Route>
          <Route path='/contacto' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </section>
    </Router>
  )
}
