// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close, resume } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex items-center py-5 
        fixed top-0 z-20 ${scrolled ? 'bg-primary' : 'bg-transparent'}
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Pulkit&nbsp;
            <span className="sm:block hidden">
              | Software Developer Engineer
            </span>
          </p>
        </Link>

        {/* Desktop links + resume button */}
        <ul className="list-none hidden sm:flex flex-row items-center gap-6">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`
                ${active === nav.title ? 'text-white' : 'text-secondary'} 
                hover:text-white text-[18px] font-medium cursor-pointer
              `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          {/* Download Resume button */}
          <li>
            <a
              href={resume} // ← Update this when you add your PDF
              download
              className="
                bg-white text-black text-[16px] font-medium 
                px-4 py-2 rounded-md flex items-center gap-2 hover:opacity-90
              "
            >
              {/* simple download SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`
              ${!toggle ? 'hidden' : 'flex'} p-6 black-gradient 
              absolute top-20 right-0 mx-4 my-2 min-w-[160px] 
              z-10 rounded-xl
            `}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`
                    font-poppins font-medium cursor-pointer text-[16px] 
                    ${active === nav.title ? 'text-white' : 'text-secondary'}
                  `}
                  onClick={() => {
                    setActive(nav.title)
                    setToggle(false)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {/* Mobile resume link */}
              <li>
                <a
                  href={resume} // ← Update this when you add your PDF
                  download
                  className="
                    bg-white text-black text-[16px] font-medium 
                    px-4 py-2 rounded-md flex items-center gap-2
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
