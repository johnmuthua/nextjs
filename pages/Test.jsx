import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

const Test = () => {
  return (
    <div>
      <ReactMarkdown
        children={`The lift coefficient ($C_L$) is a dimensionless coefficient.`}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
    </div>
  );
};

export default Test;
