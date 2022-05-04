import Head from 'next/head'
import NavTwo from './nav-two'


export default function Layout({ children }) {
  return (
    <>
        <NavTwo/>
         <main className="layout">{children}</main>
    </>
  )
}