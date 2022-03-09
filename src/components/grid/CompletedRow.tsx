import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'

type Props = {
  guess: string
  isRevealing?: boolean
}

export const CompletedRow = ({ guess, isRevealing }: Props) => {
  const statuses = getGuessStatuses(guess)
  const splitGuess = unicodeSplit(guess)

  return (
    <div className="grid grid-cols-5 grid-rows-1 grid-flow-row-dense gap-1 text-gray-200 text-sm text-center">
      {splitGuess.map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
    </div>
  )
}
