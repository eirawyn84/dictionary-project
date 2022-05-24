import React, { useState, useRef } from "react";
import "./AudioPlayer.css";
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";

export default function AudioPlayer(props) {
  //state

  const [isPlaying, setIsPlaying] = useState(false);

  //referencees "refernce": unknown word

  const audioPlayer = useRef(); //refernce our audio player

  function togglePlayPause() {
    const prevValue = isPlaying;

    setIsPlaying(!prevValue);

    if (prevValue) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
  }
  return (
    <div className="audioPLayer">
      <audio ref={audioPlayer} src={props.audio} preload="metadata"></audio>
      <button onClick={togglePlayPause} className="playPause">
        {isPlaying ? <FaPauseCircle /> : <FaPlayCircle className="play" />}
      </button>
    </div>
  );
}
