import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const links = [
  { label: 'Email', icon: '✉', href: 'mailto:pathanrehan650@gmail.com', display: 'pathanrehan650@gmail.com' },
  { label: 'LinkedIn', icon: 'in', href: 'https://linkedin.com/in/rehan-pathan-ab059a2272', display: 'linkedin.com/in/rehan-pathan' },
  { label: 'GitHub', icon: '⌥', href: 'https://github.com/rehanpathan650', display: 'github.com/rehanpathan650' },
  { label: 'LeetCode', icon: '#', href: 'https://leetcode.com/rehan491', display: 'leetcode.com/rehan491' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} style={{ padding: '10rem 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(0,255,148,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#00ff94', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          // Let's build something
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(3rem, 6vw, 6rem)', lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
          Get in<br /><span style={{ color: '#00ff94', WebkitTextStroke: '1px #00ff94', WebkitTextFillColor: 'transparent' }}>touch.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
          style={{ color: '#444', marginBottom: '3rem', fontSize: '1rem' }}>
          Open to full-time roles, freelance projects, and collabs. I reply within 24 hours.
        </motion.p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
          {links.map((l, i) => (
            <motion.a key={l.label} href={l.href} target="_blank"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'DM Mono', fontSize: '0.82rem', color: '#444', border: '1px solid #1f1f1f', padding: '0.75rem 1.5rem', borderRadius: '2px', transition: 'color 0.2s, borderColor 0.2s', width: '100%', maxWidth: 400, justifyContent: 'center' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#00ff94'; e.currentTarget.style.borderColor = 'rgba(0,255,148,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#444'; e.currentTarget.style.borderColor = '#1f1f1f' }}
            >
              <span style={{ color: '#00ff94', fontSize: '0.9rem' }}>{l.icon}</span>
              {l.display}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
