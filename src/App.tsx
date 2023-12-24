import React from 'react'

import Advocate from './components/Advocate'
import Banner from './components/Banner'
import Events from './components/Events'
import Footer from './components/Footer'
import Header from './components/Header'
import Issues from './components/Issues'
import SupportAndService from './components/SupportAndService'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Advocate />
      <Events />
      <Issues />
      <SupportAndService />
      <section className='space-y-4 lg:space-y-8 py-26'>
        <h1 className='text-5.5xl tracking-wider text-center lg:space-x-6 lg:text-6xl gradient-text'>
          <span>台灣的明天</span>
          <br className='lg:hidden' />
          <span>喵先鋪路</span>
        </h1>
        <div className="flex items-center justify-center space-x-2">
          <span className='px-3 lg:px-3.5 py-1 lg:py-2.5 text-2xl lg:text-3xl font-black text-white rounded-full bg-gradient-to-r from-gradient-color-1 to-gradient-color-2'>3</span>
          <span className='text-2.5xl font-bold lg:text-4xl text-primary-color'>喵立翰 Miao LiHan</span>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
