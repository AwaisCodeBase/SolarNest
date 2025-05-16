import React from 'react'
import styles from './Renewable_Energy_Solution.module.css'
import Hero from '../../components/Hero/Hero'
import Service from '../../components/Service/Service'

const Renewable_Energy_Solution = () => {
  return (
    <>
    <Hero
     backgroundImage="/SolarNest/assets/renew.jpg"
     title="Renewable Energy Solution"
    />
    <Service />
    </>
  )
}

export default Renewable_Energy_Solution