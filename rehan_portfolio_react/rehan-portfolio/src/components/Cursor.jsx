import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 18 })
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 18 })
  const dotX = useSpring(mouseX, { stiffness: 300, damping: 25 })
  const dotY = useSpring(mouseY, { stiffness: 300, damping: 25 })
  const isHovering = useRef(false)

  useEffect(() => {
    const move = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY) }
    window.addEventListener('mousemove', move)

    const addHover = () => { isHovering.current = true }
    const removeHover = () => { isHovering.current = false }
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, pointerEvents: 'none',
          zIndex: 9999, width: 8, height: 8, borderRadius: '50%',
          background: '#00ff94', transform: 'translate(-50%, -50%)',
          x: dotX, y: dotY, mixBlendMode: 'difference'
        }}
      />
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, pointerEvents: 'none',
          zIndex: 9998, width: 36, height: 36, borderRadius: '50%',
          border: '1px solid rgba(0,255,148,0.5)', transform: 'translate(-50%, -50%)',
          x: ringX, y: ringY, mixBlendMode: 'difference'
        }}
      />
    </>
  )
}
