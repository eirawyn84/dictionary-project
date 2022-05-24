import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <audio src={props.phonetic.audio} controls></audio>
      <br />
      {props.phonetic.text}
    </div>
  );
}
