import Head from 'next/head'
import NavTwo from './nav-two'
import Footer from './footer'


export default function Layout({ children }) {
  return (
    <>
        <NavTwo/>
         <main className="layout">{children}</main>
         <Footer/>
    </>
  )
}