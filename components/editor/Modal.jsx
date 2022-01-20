import { useContext, useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import emoji from "remark-emoji";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

import { QuestionPage } from "../../context/CodePageContext";

import "katex/dist/katex.min.css";
import { FaTimes } from "react-icons/fa";

function Modal() {
  const { question, handleClick } = useContext(QuestionPage);
  const { content, title } = question;

  return (
    <section>
      <div className="bg-black h-full  bg-opacity-90 absolute inset-0 flex  mt-12">
        <form className="bg-white rounded-lg m-2 overflow-y-auto">
          <div className="flex flex-row justify-between m-2">
            <div></div>
            <div>
              <button
                onClick={handleClick}
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
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        style={solarizedlight}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
                remarkPlugins={[remarkMath, emoji]}
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
