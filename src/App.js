import React from "react";
import { ReactCommons } from "./react-commons";
import { ReactIcons } from "./react-icons";
import { ReactEmojis } from './react-emojis';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ReactCommons />
      <ReactIcons iconType="green-energy-color" />
      <ReactEmojis emojiType="smileys-emotion/face-affection" />
    </div>
  );
};
