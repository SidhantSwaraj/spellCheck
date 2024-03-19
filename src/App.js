import { useState } from "react";
import "./styles.css";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

export default function App() {
  const [text, setText] = useState("");
  const [suggestedtext, setSuggestedtext] = useState("");

  const handlechange = (e) => {
    const text = e.target.value;
    setText(text);

    const words = text.split(" ");

    const correctedwords = words.map((word) => {
      const correctedword = customDictionary[word.toLowerCase()];
      return correctedword || word;
    });

    const firstcorrection = correctedwords.find(
      (word, idx) => word !== words[idx]
    );

    setSuggestedtext(firstcorrection || "");
  };
  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        placeholder="Enter text..."
        onChange={handlechange}
        cols={40}
        rows={5}
      />
      {suggestedtext && (
        <p>
          Did you mean: <strong>{suggestedtext}</strong>
        </p>
      )}
    </div>
  );
}
