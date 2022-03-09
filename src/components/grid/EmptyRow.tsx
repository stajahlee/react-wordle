import { MAX_WORD_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH))

  return (
    <div className="grid grid-cols-5 grid-rows-1 grid-flow-row-dense gap-1 font-mono text-white text-sm text-center font-bold leading-6">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
