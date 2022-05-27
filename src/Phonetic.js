import React from "react";
import AudioPlayer from "./AudioPlayer";
import "./Phonetics.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <AudioPlayer audio={props.phonetic.audio} />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
