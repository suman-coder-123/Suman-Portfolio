import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../lib/utils'

/**
 * Subtle, accessible scroll-reveal wrapper. Honours reduced-motion settings.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  as = 'div',
  once = true,
  ...props
}) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduceMotion) {
    const Tag = as
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

export function Stagger({ children, className, delay = 0, ...props }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, ...props }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      variants={
        reduceMotion
          ? undefined
          : {
              hidden: { opacity: 0, y: 22 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  )
}
