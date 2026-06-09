import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const items = [
  { icon: '🏆', title: 'Meta Hacker Cup', desc: 'Rank 2699 in 2024 Qualification Round. Competed across 2023, 2024 & 2025 — globally competitive programming at scale.' },
  { icon: '💡', title: '200+ DSA Problems', desc: 'Solved across LeetCode, Codeforces, GeeksForGeeks, and CodeChef — strong foundation in algorithms & data structures.' },
  { icon: '🌐', title: 'Open Source', desc: 'Contributed 2 pull requests on GitHub during Hacktoberfest 2022 — actively engaging with the open-source community.' },
]

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ padding: '7rem 3rem', maxWidth: 1200, margin: '0 auto' }}>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#00ff94', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
        // 04 — Recognition
      </motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
        style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '-0.03em', marginBottom: '3.5rem' }}>
        Achievements<span style={{ color: '#00ff94' }}>.</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
        {items.map((item, i) => (
          <motion.div key={item.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: i * 0.15 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, borderColor: 'rgba(0,255,148,0.2)', transition: { duration: 0.2 } }}
            style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '4px', padding: '1.75rem', textAlign: 'center' }}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{item.icon}</div>
            <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.6rem' }}>{item.title}</h3>
            <p style={{ fontSize: '0.84rem', color: '#5a5a5a', lineHeight: 1.7 }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
