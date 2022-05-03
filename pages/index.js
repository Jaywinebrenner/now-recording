import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Modal from 'react-modal';
import React, {useState, useEffect} from 'react';

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

export default function Home() {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    let home = document.querySelector(".home");
    console.log("home", home);
    home.classList.add("grid-animation");

  }, []);



  return (
    <div className="home">
      <div className="box a">
        <p>Recording Studio</p>
      </div>
      <div onClick={openModal} className="box b">
        <h1>CONTACT</h1>
      </div>
      <div className="box c">
        <Link href="/photos">
          <h1>PHOTOS</h1>
        </Link> 
      </div>
      <div className="box d">
        <Link href="/music">
          <h1>MUSIC</h1>
        </Link> 
      </div>
      <div className="box e">
        <Link href={{ pathname: '/equipment', query: { data: "equipment"} }}>
          <h1>EQUIPMENT</h1>
        </Link> 
      </div>
      <div className="box f">
        <Link href="/about">
          <h1>ABOUT</h1>
        </Link> 
      </div>
      <div className="box g">
        <h2>
          <span>PORTLAND OREGON</span> 
        U.S.A.</h2>
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
