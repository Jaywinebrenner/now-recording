
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import Modal from 'react-modal';

export default function NavTwo() {

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
        <div className="nav-two">

            <div className="nav-two__one">
                <Link className="nav-two__link" href="/">
                    <div className="nav-two-logo-wrapper">
            
                        <p>RECORDING</p>
                    </div>
                </Link> 
            </div>

            <div className="nav-two__two">
            <div className="link">
                <div onClick={()=> handleSetActive("photos")}>
                    <Link className="nav-two__link" href="/photos">
                        <h1 className={`${router.pathname === "/photos" ? "active" : ""}`}>PHOTOS</h1>
                    </Link> 
                </div>
            </div>
            <div className="link">
                <div onClick={()=> handleSetActive("music")}>
                    <Link className="nav-two__link" href="/music">
                        <h1 className={`${router.pathname === "/music" ? "active" : ""}`}>MUSIC</h1>
                    </Link> 
                </div>
            </div>

            </div>
            <div className="nav-two__three">
            <div className="link">
                <div onClick={()=> handleSetActive("equipment")}>
                    <Link className="nav-two__link" href="/equipment">
                        <h1 className={`${router.pathname === "/equipment" ? "active" : ""}`}>EQUIPMENT</h1>
                    </Link> 
                </div>
            </div>
            <div className="link">
                <div onClick={()=> handleSetActive("about")}>
                    <Link className="nav-two__link" href="/about">
                        <h1 className={`${router.pathname === "/about" ? "active" : ""}`}>ABOUT</h1>
                    </Link> 
                </div>
            </div>
            <div className="link">
                <h1 onClick={openModal}>CONTACT</h1>
            </div>

            </div>

            {/* {
                navLinks.map((l) => {
                    return (
                        <>
                        <div onClick={()=> handleSetActive(l.text.toLowerCase())}>
                            <Link className="nav-two__link" href={l.href}>
                                <h1 className={`${router.pathname === "/" + l.text.toLowerCase() ? "active" : ""}`}>{l.text}</h1>
                            </Link> 
                        </div>
                        </>
                    )
                })
            } */}
  
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
