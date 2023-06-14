import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Statistic from '../../components/Statistic'

const Home = () => {
  return (
    <React.Fragment>
      <Header/>
        <main>
          <Banner />
          <Statistic />
        </main>
      <Footer/>
    </React.Fragment>
  )
}

export default Home