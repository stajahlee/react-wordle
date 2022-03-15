import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
  style?: Record<string, unknown>
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
  style,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'border-solid border-2 flex items-center justify-center mx-0.5 text-2xl font-bold dark:text-white p-2',
    {
      'bg-white dark:bg-neutral-900 border-neutral-400 dark:border-neutral-600':
        !status,
      'border-black dark:border-neutral-100': value && !status,
      'absent shadowed bg-neutral-400 dark:bg-neutral-700 border-neutral-400 dark:border-neutral-700':
        status === 'absent',
      'correct shadowed bg-orange-500 text-white border-orange-500':
        status === 'correct' && isHighContrast,
      'present shadowed bg-cyan-500 text-white border-cyan-500':
        status === 'present' && isHighContrast,
      'correct shadowed bg-green-500 text-white border-green-500':
        status === 'correct' && !isHighContrast,
      'present shadowed bg-yellow-500 text-white border-yellow-500':
        status === 'present' && !isHighContrast,
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  return (
    <div className={classes} style={{ animationDelay, ...style }}>
      <div className="letter-container" style={{ animationDelay }}>
        {value}
      </div>
    </div>
  )
}
