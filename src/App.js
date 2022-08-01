import Select from "react-select";
import React, { useState } from "react";
import Picker from "emoji-picker-react";

//external before internal libs
// "the further the way from your project, the higher it is. I like it." ~noman

import logo from "./logo.svg";
import "./App.css";

const options = [
  { value: "😵", label: "😵" },
  { value: "☺️", label: "☺️" },
];

const Prompt = (props) => {
  const onEmojiClick = (event, emojiObject) => {
    props.setInput((prevInput) => prevInput + emojiObject.emoji);
    // props.setInput(emojiObject.emoji);
    props.setPicker(false);
  };

  return (
    <div>
      <span>{props.label} </span>

      <span className="picker-container">
        <input
          className="input-style"
          value={props.input}
          onChange={props.setInput}
          onClick={() => props.setPicker((val) => !val)}
        />
        {props.showPicker && <Picker onEmojiClick={onEmojiClick} />}
      </span>
    </div>
  );
};

const App = () => {
  const [showPicker1, setShowPicker1] = useState(false);
  const [prompt1, setPrompt1] = useState("");

  const [showPicker2, setShowPicker2] = useState(false);
  const [prompt2, setPrompt2] = useState("");

  const [showPicker3, setShowPicker3] = useState(false);
  const [prompt3, setPrompt3] = useState("");

  const [showPicker4, setShowPicker4] = useState(false);
  const [prompt4, setPrompt4] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div className="form-wrapper">
          <h2>emoji nvc</h2>

          <Prompt
            label="when u"
            input={prompt1}
            setInput={setPrompt1}
            showPicker={showPicker1}
            setPicker={setShowPicker1}
          />

          <Prompt
            label="i feel "
            input={prompt2}
            setInput={setPrompt2}
            showPicker={showPicker2}
            setPicker={setShowPicker2}
          />

          <Prompt
            label="bc i need "
            input={prompt3}
            setInput={setPrompt3}
            showPicker={showPicker3}
            setPicker={setShowPicker3}
          />

          <Prompt
            label="would u pls "
            input={prompt4}
            setInput={setPrompt4}
            showPicker={showPicker4}
            setPicker={setShowPicker4}
          />

          <button className="save-button">save</button>
          <div>
            <span>{prompt1}</span>
            <span>{prompt2}</span>
            <span>{prompt3}</span>
            <span>{prompt4}</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
