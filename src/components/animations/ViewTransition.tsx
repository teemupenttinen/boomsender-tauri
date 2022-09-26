import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { PropsWithChildren, useEffect, useState } from 'react'

const variants = (goBack: boolean) => ({
  inactive: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  out: {
    opacity: 0,
    x: goBack ? 300 : -300,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  in: {
    x: goBack ? -300 : 300,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
})

const ViewTransition: React.FC<PropsWithChildren> = ({ children }) => {
  const { asPath, beforePopState, events } = useRouter()
  const [animateBack, setAnimateBack] = useState(false)

  const routeChangeComplete = () => {
    setAnimateBack(false)
  }

  useEffect(() => {
    beforePopState(() => {
      setAnimateBack(true)
      return true
    })

    events.on('routeChangeComplete', routeChangeComplete)

    return () => {
      events.off('routeChangeComplete', routeChangeComplete)
    }
  }, [beforePopState, asPath])

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.div key={asPath} variants={variants(animateBack)} initial="in" animate="inactive" exit="out" className="">
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default ViewTransition
