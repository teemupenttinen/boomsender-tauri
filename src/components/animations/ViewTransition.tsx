import { PropsWithChildren, useEffect, useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

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
  const { asPath, beforePopState, events, query } = useRouter()
  const [animateBack, setAnimateBack] = useState(false)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    if (!query['position'] || typeof query['position'] !== 'string') return
    const newPosition = parseInt(query['position'])
    const transitionRight = position - newPosition <= 0 ? false : true
    setPosition(newPosition)
    setAnimateBack(transitionRight)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

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
  }, [beforePopState, asPath, events])

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.div key={asPath} variants={variants(animateBack)} initial="in" animate="inactive" exit="out" className="">
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default ViewTransition
