import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
  XCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';
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
  const [showBanner, setShowBanner] = useState(true);
  const [fading, setFading] = useState(false);

  function hideBanner() {
    setFading(true);
    setTimeout(() => setShowBanner(false), 1000);
  }

  useEffect(() => {
    setTimeout(() => hideBanner(), 10000);
  }, []);

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
      <Animated
        animationIn="zoomIn"
        animationOut="zoomOut"
        isVisible={!fading}
        style={showBanner ? {} : { display: "none" }}
      >
        <div className="announcement h-14 bg-gradient-to-r from-violet-800 to-fuchsia-800 flex items-center justify-center">
          <div
            style={{ maxWidth: '90vw', display: 'flex', alignItems: 'center' }}
          >
            <p className="text-gray-100 text-sm text-center">
              Correct word changes daily! Find the correct word in Galatians 2 this week!
            </p>
            <XCircleIcon
              className="h-6 w-6 ml-3 cursor-pointer dark:stroke-white"
              onClick={() => setShowBanner(false)}
            />
          </div>
        </div>
      </Animated>
    </div>
  );
};
