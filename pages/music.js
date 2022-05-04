import React, {useState, useEffect} from 'react';
import Layout from './components/layout'

export default function Music() {


  return (
    <Layout>
        <div className="music">
            {/* <Nav/> */}
            <div className="music__wrapper">
              <a>Tiny Tim</a>
              <a>Heino</a>
              <a>The Kinks</a>
              <a>Ted Nugent</a>
            </div>
        </div>
    </Layout>
  )
}