
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import Modal from 'react-modal';

export default function Nav() {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height: "80vh",
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      };

    const [active, setActive] = useState()
    const router = useRouter();

    const navLinks = [
        {
          text: "PHOTOS",
          href: "/photos",
        },
        {
          text: "MUSIC",
          href: "/music",
        },
        {
          text: "EQUIPMENT",
          href: "/equipment",
        },
        {
          text: "ABOUT",
          href: "/about",
        },
      ]

      const [modalIsOpen, setIsOpen] = useState(false);

      function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }

      const handleSetActive = (link) => {
        setActive(link)
    
      }


  useEffect(() => {
    const query = router.query;
    setActive(query.data)
  }, []);


  return (
        <div className="nav">
            <div className="nav-logo-wrapper">
                <Link className="nav__link" href="/">
                    <img className="nav__logo" src="/nav-now.jpg"/>
                </Link> 
                <p>RECORDING</p>
            </div>
            {
                navLinks.map((l, i) => {
                    return (
                        <>
                        <div key={`navlink-key=${i}`} onClick={()=> handleSetActive(l.text.toLowerCase())}>
                            <Link className="nav__link" href={l.href}>
                                <h1 className={`${router.pathname === "/" + l.text.toLowerCase() ? "active" : ""}`}>{l.text}</h1>
                            </Link> 
                        </div>
                        </>
                    )
                })
            }
            <div>
                <h1 onClick={openModal}>CONTACT</h1>
            </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    overlayClassName="Overlay"
                >
                    <div onClick={() => closeModal()} className='x-wrapper'>x</div>
                    <div className='modal-content'>
                        <img src="/now.jpg"/>
                         <p>Recording, mixing, and mastering services.</p>
                        <h1>entirelyoftin@gmail.com</h1>
                    </div>
                </Modal>
        </div>
  )
}
