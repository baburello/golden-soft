import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'

const Home = () => {
  return (
    <React.Fragment>
      <Header/>
        <main>
          <Banner />
        </main>
      <Footer/>
    </React.Fragment>
  )
}

export default Home