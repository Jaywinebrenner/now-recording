
import React, {useState, useEffect} from 'react';
import Layout from './components/layout'

export default function Equipment() {

  useEffect(() => {

  }, []);


  return (
    <Layout>
      <div className="equipment">
          {/* <NavTwo/> */}
          <div className="equipment__wrapper">
            <ul>
              <li>Tascam 420</li>
              <li>Mesaboogie 666</li>
              <li>SM69</li>
            </ul>
              <div className="equipment__body">
              </div>
          </div>
      </div>
    </Layout>
  )
}
