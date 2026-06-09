import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js / Next.js', pct: 90 },
      { name: 'TypeScript', pct: 80 },
      { name: 'React Native', pct: 75 },
      { name: 'Redux', pct: 82 },
      { name: 'Tailwind CSS', pct: 88 },
    ]
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js / Express.js', pct: 88 },
      { name: 'REST APIs / Web Services', pct: 92 },
      { name: 'MongoDB', pct: 85 },
      { name: 'PostgreSQL / SQL', pct: 76 },
      { name: 'JWT / Auth / RBAC', pct: 87 },
    ]
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Git / GitHub', pct: 90 },
      { name: 'Docker', pct: 72 },
      { name: 'CI/CD / GitHub Actions', pct: 70 },
      { name: 'AWS S3 / EC2', pct: 65 },
      { name: 'Postman / API Testing', pct: 85 },
    ]
  },
  {
    title: 'AI/ML & Fundamentals',
    skills: [
      { name: 'OpenAI GPT-4o', pct: 82 },
      { name: 'Python / Pandas / NumPy', pct: 75 },
      { name: 'DSA (200+ problems)', pct: 80 },
      { name: 'Agile / Scrum / SDLC', pct: 87 },
      { name: 'OOP Principles', pct: 83 },
    ]
  },
]

function SkillBar({ name, pct, index, inView }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#5a5a5a' }}>
        <span>{name}</span><span style={{ color: '#333' }}>{pct}%</span>
      </div>
      <div style={{ height: '2px', background: '#1a1a1a', borderRadius: '2px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }} animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: '100%', background: 'linear-gradient(90deg, #00ff94, #00cc78)', borderRadius: '2px' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{ padding: '7rem 3rem', maxWidth: 1200, margin: '0 auto' }}>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#00ff94', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
        // 03 — Toolkit
      </motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
        style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '-0.03em', marginBottom: '3.5rem' }}>
        Skills<span style={{ color: '#00ff94' }}>.</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {skillGroups.map((group, gi) => (
          <motion.div key={group.title}
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: gi * 0.12 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '4px', padding: '1.75rem' }}
          >
            <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.5rem', color: '#f2f2f2' }}>{group.title}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {group.skills.map((s, si) => (
                <SkillBar key={s.name} name={s.name} pct={s.pct} index={gi * 5 + si} inView={inView} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
