
import React, { useEffect} from 'react';
import Layout from './components/layout'

export default function Equipment({props}) {

  console.log("Props EQUIP PAGE", props[0].acf);

  useEffect(() => {

  }, []);

  return (
    <Layout>
      <div className="equipment">
          <div className="equipment__wrapper">
            <ul>
             {/* <li>Tascam 420</li>
              <li>Mesaboogie 666</li>
              <li>SM69</li>  */}
              {
                props[0].acf.equipment.map((e) => {
                  return (
                    <>
                      <li>{e.piece}</li>
                    </>
                  )
                })
              } 
            </ul>
              <div className="equipment__body">
              </div>
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