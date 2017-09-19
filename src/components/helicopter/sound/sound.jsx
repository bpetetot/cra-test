import React from 'react';
import soundHelicopter from './helicopter.ogg'

const Sound = () => {
  return (
    <audio autoPlay loop>
      <source src={soundHelicopter} type="audio/ogg" />
    </audio>
  );
};

export default Sound;