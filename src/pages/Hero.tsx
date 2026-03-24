import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Code2, Database, Server, Layers, Github, Linkedin, Mail, ExternalLink, Terminal, Palette } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { Menu, X } from "lucide-react";
const Hero = () => {
  return (
     <section className="min-h-screen flex flex-col justify-center items-center pt-20 md:pt-24 relative overflow-hidden">
    <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-8 gap-10 w-full">
      {/* LEFT TEXT */}
      <div className="flex-1 text-center md:text-left">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
            Available for Freelance
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Anshul Gaur
          <span className="block text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mt-4">
            Full Stack Developer
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-md mx-auto md:mx-0 mb-10">
          2+ years of experience building scalable web applications with MERN Stack
        </p>
      </div>

      {/* RIGHT MODEL */}
      <div className="flex-1 w-full flex justify-center relative h-[300px] sm:h-[400px] md:h-[500px]">
        <div
 className="absolute -top-32 -right-20 w-[300px] h-[600px] rounded-full 
  bg-gradient-to-bl from-yellow-300 via-amber-400 to-transparent 
  opacity-40 blur-[150px] animate-pulse"
/>

        <Spline
          scene="https://prod.spline.design/xT2D5-PXRdX9r7gu/scene.splinecode"
          className="absolute lg:top-0 top-[20%] bottom-0 leg:left[25%] sm:left-[-2%] w-full h-full"
        />
      </div>
    </div>
  </section>
  )
}

export default Hero
