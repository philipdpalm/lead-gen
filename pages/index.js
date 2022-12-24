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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Promo 
    image="https://source.unsplash.com/glO8JbrAj5k"
    title="Easy & Safe Property Investing"
    content="Our team will contact you and provide advice on the best investment for you at no cost with a low barrier to entry"
    link="signup"
    />
    <Info />
    <Steps />
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
