import React from 'react';
import Layout from './components/layout'

export default function Music() {

  return (
    <Layout>
        <div className="music">
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