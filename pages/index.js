import React from "react";
import { Inter } from '@next/font/google'
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Info from "../src/components/Info";
import Steps from "../src/components/Steps";
import SignUp from "../src/components/SignUp";
import Promo from "../src/components/Promo";
import Footer from "../src/components/Footer";
import PromoReverse from "../src/components/PromoReverse";
import Partners from "../src/components/Partners";
import logoOne from '../public/barratt.png'
import logoTwo from '../public/hammerson.png'
import logoThree from '../public/berkley.png'
import logoFour from '../public/shaftersbury.png'
import logoFive from '../public/bellway.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Promo 
    image="https://source.unsplash.com/glO8JbrAj5k"
    title="Easy & Safe Property Investing"
    content="Our team will connect you with trusted advisers from leading entities, advising you on the best investment for you at no cost"
    link="signup"
    />
    <Info />
    <Steps />
    <Partners 
    logoOne={logoOne}
    logoTwo={logoTwo}
    logoThree={logoThree}
    logoFour={logoFour}
    logoFive={logoFive}
    />
    <PromoReverse 
    image="https://source.unsplash.com/QR_vT8_hBZM"
    title="We Provide Completely Free Consultation Services"
    content="We match you with an investment for completely free, we pride on providing a transparent service so you can invest in confidence."
    link="signup"
    />
    <SignUp />

    <Footer />
    </>
  )
}
