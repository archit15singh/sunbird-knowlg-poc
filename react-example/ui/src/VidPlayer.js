import React, { useEffect } from 'react';
import playerConfig from './config';

const VidPlayer = () => {
  useEffect(() => {
    window.questionListUrl = 'https://staging.sunbirded.org/api/question/v1/list';
    window.questionSetBaseUrl = 'https://staging.sunbirded.org/api/questionset';

    const videoElement = document.createElement('sunbird-video-player');
    videoElement.setAttribute('player-config', JSON.stringify(playerConfig));

    videoElement.addEventListener('playerEvent', (event) => {
      console.log('On playerEvent', event);
    });

    videoElement.addEventListener('telemetryEvent', (event) => {
      console.log('On telemetryEvent', event);
    });

    const myPlayer = document.getElementById('my-player');
    myPlayer.appendChild(videoElement);
  }, []);

  return <div id="my-player"></div>;
};

export default VidPlayer;
