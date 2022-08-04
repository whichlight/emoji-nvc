import Select from "react-select";
import React, { useState } from "react";
import Picker from "emoji-picker-react";

//external before internal libs
// "the further the way from your project, the higher it is. I like it." ~noman

//todo
//speed things up

import "./App.css";

const Prompt = (props) => {
  const key = props.index;

  const onEmojiClick = (event, emojiObject) => {
    //props.setInput((prevInput) => prevInput + emojiObject.emoji);
    props.setPromptFields((prevFields) => ({
      ...prevFields,
      [key]: { ...prevFields[key], prompt: emojiObject.emoji, picker: false },
    }));
  };

  const onPickerChange = () => {
    props.setPromptFields((prevFields) => ({
      ...prevFields,
      [key]: {
        ...prevFields[key],
        prompt: props.promptFields[key].prompt,
      },
    }));
  };

  const onPickerClick = () => {
    props.setPromptFields((prevFields) => {
      const pickerVal = !prevFields[key].picker;
      return {
        ...prevFields,
        [key]: { ...prevFields[key], picker: pickerVal },
      };
    });
  };

  return (
    <div>
      <span>{props.promptFields[key].label} </span>
      <span className="picker-container">
        <input
          className="input-style"
          value={props.promptFields[key].prompt}
          onChange={onPickerChange}
          onClick={onPickerClick}
        />
        {props.promptFields[key].picker && (
          <Picker onEmojiClick={onEmojiClick} />
        )}
      </span>
    </div>
  );
};

const App = () => {
  const [promptFields, setPromptFields] = useState({
    when: { label: "when u ", prompt: "", picker: false },
    feel: { label: "i feel ", prompt: "", picker: false },
    need: { label: "bc i need ", prompt: "", picker: false },
    pls: { label: "would u pls ", prompt: "", picker: false },
  });

  const displayPrompts = Object.keys(promptFields).map((e, i) => {
    return (
      <Prompt
        key={e}
        index={e}
        promptFields={promptFields}
        setPromptFields={setPromptFields}
      />
    );
  });

  const displayResponses = Object.keys(promptFields).map((e, i) => {
    return <span key={e}>{promptFields[e].prompt}</span>;
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="form-wrapper">
          <h2>emoji nvc</h2>
          {displayPrompts}
          <button className="save-button">save</button>
          <div>{displayResponses}</div>
        </div>
      </header>
    </div>
  );
};

export default App;
