
import React, {useState, useEffect} from 'react';
import Nav from './components/nav'
import Layout from './components/layout'
import MapContainer from './components/map-container';


export default function About() {
  // const {isLoaded} = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY, })




  return (
    <Layout>
        <div className="about">
   
          <div className="about__wrapper">
            <h1>NOW! Recording Studio is located in the heart of St Johns in a 3000 Square foot loft space overlooking the so-and-so train tracks with a view of Mount St. Helens.</h1>
            <h1>Helmed by long time music vet Mitch Dries.</h1>
          </div>
          <MapContainer></MapContainer>

      </div>
    </Layout>
  )
}