import React from 'react';
import Layout from './components/layout'

export default function Music({props}) {

  console.log("Props MUSIC PAGE", props[0].acf);

  return (
    <Layout>
        <div className="music">
            <div className="music__wrapper">
              {/* <a>Tiny Tim</a>
              <a>Heino</a>
              <a>The Kinks</a>
              <a>Ted Nugent</a> */}
              
              {
                props[0].acf.artist.map((a, i) => {
                  return (
                    <a key={`artist-key=${i}`} target="_blank" href={a.url}>{a.artist}</a>
                  )
                })
              } 
            </div>
        </div>
    </Layout>
  )
}

export async function getServerSideProps() {

  const res = await fetch("https://nowrecording.jaywinebrenner.com//wp-json/wp/v2/pages");
  let props = await res.json()

  return {
    props: {
      props
    },
  };
}