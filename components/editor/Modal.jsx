import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";
import { FaTimes } from "react-icons/fa";

function Modal({ title, content, setmodal }) {
  return (
    <section>
      <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
        <form className="bg-white rounded-lg m-2">
          <div className="flex flex-row justify-between m-2">
            <div></div>
            <div>
              <button
                onClick={() => setmodal(false)}
                className="p-2 rounded-full text-red-700 top-4 left-12 transition hover:text-white hover:bg-red-800"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          <div className="p-2 rounded-lg m-1">
            <h1 className="text-xl">{title}</h1>
            <p className="text-lg font-thin">
              <ReactMarkdown
                children={content}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
              />
            </p>
            <div className="flex justify-between">
              <div></div>
              <div></div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Modal;
