import ReactDOM from "react-dom";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import { useState } from "react";
import CodeEditor from "./components/code-editor";
import Perview from "./components/perview";
import bundle from "./bundler";

const App = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor
        initialValue="const a = 1"
        onChange={(value) => setInput(value)}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Perview code={code} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
