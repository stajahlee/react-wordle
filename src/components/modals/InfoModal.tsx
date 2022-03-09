import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p
        className="text-sm text-gray-500 dark:text-gray-300"
        style={{ marginTop: 8 }}
      >
        Guess the word in 6 tries.
      </p>
      <p
        className="text-sm text-gray-500 dark:text-gray-300"
        style={{ marginTop: 8 }}
      >
        The word will relate to this week's lesson so you can gain a great
        advantage by reading ahead (NKJV).
      </p>
      <p
        className="text-sm text-gray-500 dark:text-gray-300"
        style={{ marginTop: 8 }}
      >
        After each guess, the color of the tiles will change to show how close
        your guess was to the word.
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="J"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="S" />
        <Cell value="U" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter J is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="E" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="R" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter A is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" />
        <Cell value="R" />
        <Cell value="A" />
        <Cell isRevealing={true} isCompleted={true} value="C" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter C is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This Bible related wordle game is using an open source version of the
        word guessing game we all know and love -
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>
      </p>
    </BaseModal>
  )
}
