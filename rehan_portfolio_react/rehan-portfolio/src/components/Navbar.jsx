import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Experience', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1.2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: scrolled ? '1px solid #1f1f1f' : '1px solid transparent',
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.4s ease'
      }}
    >
      <a href="#hero" style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.1rem', color: '#00ff94', letterSpacing: '0.04em' }}>RP</a>

      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {links.map((link, i) => (
          <motion.li key={link} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.4, duration: 0.5 }}>
            <a href={`#${link.toLowerCase()}`}
              style={{ fontFamily: 'DM Mono', fontSize: '0.78rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', color: '#5a5a5a', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#00ff94'}
              onMouseLeave={e => e.target.style.color = '#5a5a5a'}
            >{link}</a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}
