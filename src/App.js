import Select from "react-select";
import React, { useState } from "react";
import Picker from "emoji-picker-react";

//external before internal libs
// "the further the way from your project, the higher it is. I like it." ~noman

//todo
//speed things up

import logo from "./logo.svg";
import "./App.css";

const options = [
  { value: "😵", label: "😵" },
  { value: "☺️", label: "☺️" },
];

const Prompt = (props) => {
  const onEmojiClick = (event, emojiObject) => {
    //props.setInput((prevInput) => prevInput + emojiObject.emoji);
    props.setInput(emojiObject.emoji);
    props.setPicker(false);
  };

  return (
    <div>
      <span>{props.label} </span>

      <span className="picker-container">
        <input
          className="input-style"
          value={props.input}
          onChange={() => props.setInput}
          onClick={() => props.setPicker((val) => !val)}
        />
        {props.showPicker && <Picker onEmojiClick={onEmojiClick} />}
      </span>
    </div>
  );
};

const App = () => {
  let showPickers = Array(4).fill(null);
  let setShowPickers = Array(4).fill(null);
  let prompts = Array(4).fill(null);
  let setPrompts = Array(4).fill(null);
  const labels = ["when u ", "i feel ", "bc i need ", "would u pls "];

  const [showPicker1, setShowPicker1] = useState(false);
  const [prompt1, setPrompt1] = useState("");

  showPickers[0] = showPicker1;
  setShowPickers[0] = setShowPicker1;
  prompts[0] = prompt1;
  setPrompts[0] = setPrompt1;

  const [showPicker2, setShowPicker2] = useState(false);
  const [prompt2, setPrompt2] = useState("");

  showPickers[1] = showPicker2;
  setShowPickers[1] = setShowPicker2;
  prompts[1] = prompt2;
  setPrompts[1] = setPrompt2;

  const [showPicker3, setShowPicker3] = useState(false);
  const [prompt3, setPrompt3] = useState("");

  showPickers[2] = showPicker3;
  setShowPickers[2] = setShowPicker3;
  prompts[2] = prompt3;
  setPrompts[2] = setPrompt3;

  const [showPicker4, setShowPicker4] = useState(false);
  const [prompt4, setPrompt4] = useState("");

  showPickers[3] = showPicker4;
  setShowPickers[3] = setShowPicker4;
  prompts[3] = prompt4;
  setPrompts[3] = setPrompt4;

  const promptsFill = showPickers.map((e, i) => {
    return (
      <Prompt
        key={labels[i]}
        label={labels[i]}
        input={prompts[i]}
        setInput={setPrompts[i]}
        showPicker={showPickers[i]}
        setPicker={setShowPickers[i]}
      />
    );
  });

  const displayResponses = prompts.map((e, i) => {
    return <span key={i}>{e}</span>;
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="form-wrapper">
          <h2>emoji nvc</h2>
          {promptsFill}
          <button className="save-button">save</button>
          <div>{displayResponses}</div>
        </div>
      </header>
    </div>
  );
};

export default App;
