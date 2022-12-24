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



export default function Home() {
  return (
    <>
      <S.indexContainer>
        <NavBar/>
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
