import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

const Divider = () => (
  <div style={{ borderTop: '1px solid #1a1a1a', maxWidth: 1200, margin: '0 auto', padding: '0 3rem' }} />
)

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Achievements />
      <Divider />
      <Contact />
      <footer style={{ borderTop: '1px solid #1a1a1a', padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#333', letterSpacing: '0.05em' }}>© 2026 Rehan Pathan. Built with React + Framer Motion.</p>
        <p style={{ fontFamily: 'DM Mono', fontSize: '0.72rem', color: '#333', letterSpacing: '0.05em' }}>pathanrehan650@gmail.com</p>
      </footer>
    </>
  )
}
