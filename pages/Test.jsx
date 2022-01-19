import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

const Test = () => {
  return (
    <div>
      <button className="bg-red-600" onClick={() => alert("Click No")}>
        Click Me Here{" "}
      </button>
    </div>
  );
};

export default Test;
