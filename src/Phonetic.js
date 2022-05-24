import React from "react";
import AudioPlayer from "./AudioPlayer";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <AudioPlayer audio={props.phonetic.audio} />

      <br />
      {props.phonetic.text}
    </div>
  );
}
