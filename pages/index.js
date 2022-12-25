import Head from 'next/head'
import Image from 'next/image'
import *  as S from '../components/index.styled'
import NavBar from '../components/common/NavBar/NavBar'
import Landing from '../components/Landing/Landing'
import About from '../components/About/About'
import Facts from '../components/Facts/Facts'
import Sponsors from '../components/Sponsors/Sponsors'
import Goal from '../components/Goal/Goal'
import Footer from '../components/common/Footer/Footer'
import AltNavBar from '../components/common/AltNavBar/AltNavBar'
import { useEffect, useState } from 'react'



export default function Home() {
  
  const [useAltNav, setUseAltNav] = useState(null)
  useEffect(()=>{
    const smallDevice = window.matchMedia("(min-width: 750px)");
    smallDevice.addListener(handleDeviceChange);
    function handleDeviceChange(e) {
      if (e.matches) setUseAltNav(false);
      else setUseAltNav(true);
    }
    handleDeviceChange(smallDevice);
  }, () =>{
    window.removeEventListener(); 
  })

  return (
    <>
      <S.indexContainer>
        {
          (useAltNav)
            ? <AltNavBar/>
            : <NavBar/>
        }
        <Landing/>
        <About/>
        <Sponsors/>
        <Facts/>
        <Goal/>
        <Footer/>
      </S.indexContainer>
    </>
  )
}
