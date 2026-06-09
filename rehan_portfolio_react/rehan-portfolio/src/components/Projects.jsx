import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    num: '01', type: 'MARKETPLACE',
    name: 'AgriMart',
    desc: 'Smart agriculture marketplace enabling farmers to sell directly to consumers — eliminating middlemen, improving price fairness, and boosting discoverability through advanced search filters and global state management.',
    impact: '↑ 40% middlemen reduction · ↑ 35% search efficiency · ↑ 25% responsiveness',
    tags: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
    link: 'https://github.com/rehanpathan650'
  },
  {
    num: '02', type: 'AI · MOBILE',
    name: 'NutriVision AI',
    desc: 'AI-native mobile nutrition tracker using GPT-4o Vision API for automated food recognition — making calorie logging effortless, reducing manual friction, and providing seamless cross-session dietary synchronization.',
    impact: '↑ 80% logging speed · ↓ 60% user friction · 100% uptime',
    tags: ['React Native', 'Expo', 'OpenAI GPT-4o', 'Node.js', 'Express.js', 'REST API'],
    link: 'https://github.com/rehanpathan650'
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref} style={{ padding: '7rem 3rem', maxWidth: 1200, margin: '0 auto' }}>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#00ff94', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
        // 02 — Selected work
      </motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
        style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '-0.03em', marginBottom: '3.5rem' }}>
        Projects<span style={{ color: '#00ff94' }}>.</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} inView={inView} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project: p, index, inView }) {
  const ref = useRef(null)

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15 + 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, borderColor: 'rgba(0,255,148,0.3)', transition: { duration: 0.25 } }}
      style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '4px', padding: '2rem', position: 'relative', overflow: 'hidden' }}
    >
      {/* Hover glow */}
      <motion.div
        initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}
        style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(0,255,148,0.04) 0%, transparent 60%)', pointerEvents: 'none' }}
      />

      <div style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', color: '#333', letterSpacing: '0.1em', marginBottom: '1rem' }}>{p.num} / {p.type}</div>
      <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.5rem', marginBottom: '0.75rem', lineHeight: 1.2 }}>{p.name}</h3>
      <p style={{ fontSize: '0.87rem', color: '#444', lineHeight: 1.75, marginBottom: '1rem' }}>{p.desc}</p>
      <p style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#00ff94', marginBottom: '1.2rem', lineHeight: 1.5 }}>{p.impact}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {p.tags.map(tag => (
          <span key={tag} style={{ fontFamily: 'DM Mono', fontSize: '0.68rem', padding: '0.22rem 0.6rem', background: 'rgba(0,255,148,0.07)', color: '#00ff94', borderRadius: '2px', border: '1px solid rgba(0,255,148,0.12)' }}>{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}
