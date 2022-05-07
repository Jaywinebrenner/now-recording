import React, {useState, useEffect} from 'react';

export default function Footer() {


  useEffect(() => {

  }, []);


  return (
        <div className="footer">
            <div className="rights-wrapper">
                <p>NOW Recording</p>
                <h6>© {new Date().getFullYear()} All Rights Reserved</h6>
            </div>
    

        </div>
  )
}
