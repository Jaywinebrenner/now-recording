import React from 'react';
import Layout from './components/layout'

export default function Photos() {

  return (
    <Layout>
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
      </Layout>
  )
}