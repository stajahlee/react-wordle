import { useState } from 'react';
import { BaseModal } from './BaseModal';
import { VALID_GUESSES } from '../../constants/validGuesses';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export const HelpModal = ({ isOpen, handleClose }: Props) => {
  const [seeMoreHints, setSeeMoreHints] = useState(false);
  const [showWordBank, setShowWordBank] = useState(false);

  const basicHelp = () => (
    <>
      <p
        className="text-sm text-gray-500 dark:text-gray-300"
        style={{ marginTop: 8, fontWeight: 'bold' }}
      >
        Do not forget to use the buttons at the top of the screen if you need them.
      </p>
      <p
        className="text-sm text-gray-500 dark:text-gray-300"
        style={{ marginTop: 8 }}
      >
        The icon with a circled letter 'i' will instruct you how to play.
      </p>
      <p
        className="text-sm text-gray-500 dark:text-gray-300"
        style={{ marginTop: 8 }}
      >
        The icon that looks like a gear lets you change your screen colors or select 'Hard Mode'
      </p>


      <p className="mt-6 text-sm text-indigo-500 dark:text-indigo-300 cursor-pointer" onClick={() => setSeeMoreHints(true)}>
        CLICK HERE FOR MORE HINTS
      </p>
    </>
  );

  const letsShowMoreHints = () => (
    <>
      <p
        className="text-sm text-gray-500 dark:text-gray-300"
        style={{ marginTop: 8 }}
      >
        As instructed in the information box - all of the words that
        are valid guesses have come from the NKJV of Galatians and Ephesians.
      </p>

      <p
        className="text-sm text-rose-500 dark:text-rose-300 cursor-pointer"
        style={{ margin: 8 }}
        onClick={() => showWordBank ? setShowWordBank(false) : setShowWordBank(true)}
      >
        {`${showWordBank ? 'HIDE' : 'SEE'} THE FULL WORD BANK`}
      </p>

      {showWordBank && <p
        className="text-sm text-gray-500 dark:text-gray-300 cursor-pointer"
      >
        {VALID_GUESSES.map(word => <p>{word}</p>)}
      </p>}

      <p className="mt-6 text-sm text-indigo-500 dark:text-indigo-300 cursor-pointer" onClick={() => setSeeMoreHints(false)}>
        Go Back
      </p>
    </>
  );

  return (
    <BaseModal title="Help" isOpen={isOpen} handleClose={handleClose}>
      {seeMoreHints ? letsShowMoreHints() : basicHelp()}
    </BaseModal>
  );
};
