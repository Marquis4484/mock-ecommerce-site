import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
// Layout created to keep banner from streching to eachside of the page
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Recipe Roulette</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout