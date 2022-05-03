import React, {useState, useEffect} from 'react';
import Nav from './components/nav'

export default function Photos() {


  return (
    <>
        <Nav/>
        <div className="photos">
            <div className="photos__wrapper">

              <div className="photo-wrapper">
                <img src="https://static.tvtropes.org/pmwiki/pub/images/bela_lugosi_as_dracula.jpeg"/>
              </div>
              <div className="photo-wrapper">
                <img src="https://static.tvtropes.org/pmwiki/pub/images/bela_lugosi_as_dracula.jpeg"/>
              </div>
              <div className="photo-wrapper">
                <img src="https://static.tvtropes.org/pmwiki/pub/images/bela_lugosi_as_dracula.jpeg"/>
              </div>

            </div>
        </div>
      </>
  )
}