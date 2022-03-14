import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline';
import { GAME_TITLE } from '../../constants/strings';

type Props = {
  setIsInfoModalOpen: (value: boolean) => void;
  setIsHelpModalOpen: (value: boolean) => void;
  setIsStatsModalOpen: (value: boolean) => void;
  setIsSettingsModalOpen: (value: boolean) => void;
};

export const Navbar = ({
  setIsInfoModalOpen,
  setIsHelpModalOpen,
  setIsStatsModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5">
        <div className="icons-group">
          <InformationCircleIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
          <QuestionMarkCircleIcon
            className="blinking-question-mark h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsHelpModalOpen(true)}
          />
        </div>
        <p className="text-xl ml-2.5 font-bold dark:text-white">{GAME_TITLE}</p>
        <div className="icons-group">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  );
};
