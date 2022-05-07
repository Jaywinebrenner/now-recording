import React from 'react';
import Layout from './components/layout'


export default function Photos({props}) {

  // console.log("Props PHOTOS PAGE", props[0].acf);

  return (
    <Layout>
        <div className="photos">
            <div className="photos__wrapper">

              {
                  props[0].acf.photos.map((p, i) => {
                    return (
                      <div key={`photo-key=${i}`} className="photo-wrapper">
                        <img src={p.photo}/>
                        <p>{p.caption}</p>
                      </div>
                    )
                  })
                } 

              {/* <div className="photo-wrapper">
                <img src="https://static.tvtropes.org/pmwiki/pub/images/bela_lugosi_as_dracula.jpeg"/>
              </div>
              <div className="photo-wrapper">
                <img src="https://static.tvtropes.org/pmwiki/pub/images/bela_lugosi_as_dracula.jpeg"/>
              </div>
              <div className="photo-wrapper">
                <img src="https://static.tvtropes.org/pmwiki/pub/images/bela_lugosi_as_dracula.jpeg"/>
              </div> */}
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