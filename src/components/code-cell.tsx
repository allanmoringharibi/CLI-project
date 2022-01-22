import { useState, useEffect } from "react";
import CodeEditor from "./code-editor";
import Perview from "./perview";
import bundle from "../bundler";
import Resizable from "./resizable";
import { Cell } from "../state";
import { useActions } from "../hooks/use-actions";
import "./code-cell.css";
import { useCumulativeCode } from "../hooks/use-cumulative-code";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");

  const { updateCell } = useActions();

  const cumulativeCode: any = useCumulativeCode(cell.id);

  useEffect(() => {
    if (!code) {
      bundle(cumulativeCode.join("\n")).then((output) => {
        setCode(output.code);
        setErr(output.err);
      });
      return;
    }

    const timer = setTimeout(async () => {
      const output = await bundle(cumulativeCode.join("\n"));
      setCode(output.code);
      setErr(output.err);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [code, cumulativeCode]);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: "calc(100% - 10px)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        <div className="progress-wrapper">
          {!code ? (
            <div className="progress-cover">
              <progress className="progress is-small is-primary" max="100">
                Loading
              </progress>
            </div>
          ) : (
            <Perview code={code} err={err} />
          )}
        </div>
      </div>
    </Resizable>
  );
};

export default CodeCell;
