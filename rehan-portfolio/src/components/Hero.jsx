import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'

const stats = [
  { num: '6+', label: 'Months exp.' },
  { num: '3+', label: 'Apps built' },
  { num: '200+', label: 'DSA solved' },
  { num: '2699', label: 'Meta HC rank' },
]

const chips = ['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Express.js', 'GPT-4o', 'Docker', 'PostgreSQL']

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }
const item = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }

export default function Hero() {
  const ref = useRef(null)
  const gridRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    // GSAP ambient glow orb
    gsap.to('.hero-orb', {
      x: 40, y: -30, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1
    })
    gsap.to('.hero-orb2', {
      x: -50, y: 40, duration: 8, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2
    })
  }, [])

  return (
    <section id="hero" ref={ref} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 3rem', position: 'relative', overflow: 'hidden' }}>

      {/* Ambient orbs */}
      <div className="hero-orb" style={{ position: 'absolute', top: '-15%', right: '5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,148,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="hero-orb2" style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,148,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Noise grain */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.025, pointerEvents: 'none', zIndex: 0 }}>
        <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      <motion.div style={{ y, opacity, width: '100%', maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>

        {/* Left */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} style={{ fontFamily: 'DM Mono', fontSize: '0.75rem', color: '#00ff94', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            // Full-Stack Developer
          </motion.p>

          <motion.div variants={item}>
            <h1 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(3.5rem, 6vw, 6.5rem)', lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: '1.2rem' }}>
              Rehan<br />
              <span style={{ color: '#00ff94', WebkitTextStroke: '1px #00ff94', WebkitTextFillColor: 'transparent' }}>Pathan</span>
            </h1>
          </motion.div>

          <motion.p variants={item} style={{ fontSize: '1rem', color: '#5a5a5a', fontWeight: 300, marginBottom: '1.5rem' }}>
            Building <span style={{ color: '#f2f2f2', fontWeight: 400 }}>scalable web apps</span> with MERN stack & AI integration
          </motion.p>

          <motion.p variants={item} style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.8, maxWidth: 440, marginBottom: '2.5rem' }}>
            6+ months of professional experience crafting full-stack applications — from REST APIs to intuitive UIs. 200+ DSA problems solved. Based in Latur, Maharashtra.
          </motion.p>

          <motion.div variants={item} style={{ display: 'flex', gap: '1rem' }}>
            <a href="#projects"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#00ff94', color: '#000', padding: '0.8rem 1.8rem', borderRadius: '2px', fontFamily: 'DM Mono', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.05em', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#00cc78'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#00ff94'; e.currentTarget.style.transform = 'translateY(0)' }}
            >View Projects ↓</a>
            <a href="#contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #2a2a2a', color: '#5a5a5a', padding: '0.8rem 1.8rem', borderRadius: '2px', fontFamily: 'DM Mono', fontSize: '0.8rem', letterSpacing: '0.05em', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#00ff94'; e.currentTarget.style.color = '#00ff94' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.color = '#5a5a5a' }}
            >Get In Touch</a>
          </motion.div>
        </motion.div>

        {/* Right — Stats card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '4px', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #00ff94, transparent)' }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              {stats.map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5, ease: 'backOut' }}
                  style={{ padding: '1.2rem', background: '#181818', borderRadius: '2px' }}
                >
                  <div style={{ fontFamily: 'Syne', fontSize: '2.2rem', fontWeight: 800, color: '#00ff94', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', color: '#5a5a5a', letterSpacing: '0.05em', marginTop: '0.3rem' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {chips.map((chip, i) => (
                <motion.span key={chip}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.05 }}
                  style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', padding: '0.3rem 0.65rem', border: '1px solid #2a2a2a', color: '#444', borderRadius: '2px', letterSpacing: '0.02em' }}
                >{chip}</motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <span style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', color: '#333', letterSpacing: '0.15em', textTransform: 'uppercase' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #00ff94, transparent)' }}
        />
      </motion.div>
    </section>
  )
}
