
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import Modal from 'react-modal';

export default function Equipment() {

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
            <Link className="nav__link" href="/">
                <img className="nav__logo" src="/now.jpg"/>
            </Link> 
            {
                navLinks.map((l) => {
                    return (
                        <>
                        <div onClick={()=> handleSetActive(l.text.toLowerCase())}>
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
                    <p>Recording, mixing, and mastering services.
            Eric Crespo at the controls–working out of my home studio</p>
                    <h1>torchtoucherrecording@gmail.com</h1>
                    </div>
                </Modal>
        </div>
  )
}
