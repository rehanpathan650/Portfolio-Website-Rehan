import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const bullets = [
  'Built 3+ full-stack web apps using React.js, Node.js, Express.js, and MongoDB, improving API performance by 30% through optimized middleware and query design.',
  'Implemented JWT-based authentication with role-based access control (RBAC), securing 100% of user sessions across all projects.',
  'Participated in sprint planning, daily stand-ups, and peer code reviews in an Agile/Scrum environment — delivering features consistently on schedule.',
  'Worked with PostgreSQL/SQL and RESTful web services for backend data handling, schema design, and cross-system integration.',
  'Used Git for version control, branch management, and CI/CD pipeline workflows; contributed to software release management processes.',
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} style={{ padding: '7rem 3rem', maxWidth: 1200, margin: '0 auto' }}>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#00ff94', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
        // 01 — Work history
      </motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
        style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '-0.03em', marginBottom: '4rem' }}>
        Experience<span style={{ color: '#00ff94' }}>.</span>
      </motion.h2>

      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
        style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '3rem', paddingTop: '2.5rem', borderTop: '1px solid #1f1f1f' }}>

        <div>
          <p style={{ fontFamily: 'DM Mono', fontSize: '0.75rem', color: '#5a5a5a', letterSpacing: '0.05em', lineHeight: 1.7 }}>Sep 2025 — Feb 2026<br />6 months · Full-time<br />Office-based</p>
        </div>

        <div>
          <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.3rem' }}>Vithi IT, Hyderabad</h3>
          <p style={{ fontFamily: 'DM Mono', fontSize: '0.78rem', color: '#00ff94', letterSpacing: '0.05em', marginBottom: '1rem' }}>Trainee Programmer</p>
          <p style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.7, marginBottom: '1.2rem' }}>
            Worked as a full-stack developer building production-grade web applications in an Agile/Scrum environment, following complete SDLC practices.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {bullets.map((b, i) => (
              <motion.li key={i}
                initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontSize: '0.88rem', color: '#5a5a5a', lineHeight: 1.7, paddingLeft: '1.2rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#00ff94' }}>—</span>
                {b}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
