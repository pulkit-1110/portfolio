import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { computer } from '../assets'
import { ComputersCanvas } from './canvas'

const HeroSection = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mq.matches)
    const handleChange = (e) => setIsDesktop(e.matches)
    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [])

  return (
    <section className="relative w-full h-[100dvh] mx-auto">
      <div
        className={`absolute inset-0 top-[90px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Pulkit Uppal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Full Stack & Mobile Developer with 2+ years building scalable
            <br className="sm:block hidden" />
            web and mobile apps — React Native, React.js, Node.js, and AI-driven applications.
          </p>
        </div>
      </div>

      {/* Computer model rendering */}
      {isDesktop ? (
        <ComputersCanvas />
      ) : (
        <div
          className="absolute w-full flex justify-center"
          style={{ top: 'min(62vh, 350px)' }}
        >
          <img
            src={computer}
            alt="Computer"
            className="object-contain h-full"
          />
        </div>
      )}

      <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default HeroSection
