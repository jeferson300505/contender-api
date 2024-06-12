import React from 'react'
import '../style/error.css'  

export const ErrorPage = () => {
  return (
    <div id='bbody'>
      <div class="container " >

        <div className="error">
          <p className="p">4</p>
          <span className="dracula">
            <div className="con">
              <div className="hair"></div>
              <div className="hair-r"></div>
              <div className="head"></div>
              <div className="eye"></div>
              <div className="eye eye-r"></div>
              <div class="mouth"></div>
              <div className="blod"></div>
              <div className="blod blod2"></div>
            </div>
          </span>
          <p className="p">4</p>

          <div className="page-ms">
            <p className="page-msg"> Oops, the page you're looking for Disappeared </p>
            <button className="go-back">Go Back</button>
          </div>
        </div>
      </div>

     
    </div>
  )
}
