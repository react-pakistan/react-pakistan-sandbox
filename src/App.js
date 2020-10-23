import React from 'react';
import { ReactCommons } from './react-commons';
import { ReactEmojis } from './react-emojis';
import { ReactIcons } from './react-icons';
import { ReactUI } from './react-ui';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <ReactCommons />
      <ReactUI iconType='green-energy-color' />
      <ReactIcons iconType='green-energy-color' />
      <ReactEmojis emojiType='smileys-emotion/face-affection' />
    </div>
  );
};
