"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ModalForm from "@/components/ModalForm";
import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Brands from "@/sections/Brands";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Industries from "@/sections/Industries";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Navbar onCtaClick={openModal} />
      <main>
        <Hero onCtaClick={openModal} />
        <Stats />
        <Brands />
        <Services onCtaClick={openModal} />
        <Process onCtaClick={openModal} />
        <About />
        <Skills />
        <Industries onCtaClick={openModal} />
        <FAQ />
        <Contact onCtaClick={openModal} />
      </main>
      <Footer />
      <ModalForm isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
