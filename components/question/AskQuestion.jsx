import { useContext, useEffect, useState } from "react";

import { FiSave } from "react-icons/fi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { BsEyeglasses } from "react-icons/bs";
import { AskQuestionContext } from "../../context/QuestionPageContext";

import Modal from "./Modal";
import questions from "../../pages/questions";

const AskQuestion = () => {
  const {
    modal,
    question,
    handleClick,
    handleDeleteQuestion,
    handleSaveQuestion,
    handleOnChange,
  } = useContext(AskQuestionContext);

  return (
    <div>
      <div>{modal ? <Modal /> : null}</div>

      <section className="m-0 p-0 pt-10">
        <div className="bg-black">
          <form className="bg-white rounded-lg m-2 p-2">
            <div className="flex flex-row justify-between m-2 p-2">
              <div>
                <div>
                  <button
                    onClick={handleClick}
                    className="px-4 py-2 bg-gray-500 text-sm text-white  rounded-md flex justify-center items-center hover:bg-transparent hover:text-green-500"
                  >
                    <BsEyeglasses className="mr-1" /> Preview
                  </button>
                </div>
              </div>
              <div>
                <button className="px-4 py-2 bg-green-500 text-sm text-white  rounded-md flex justify-center items-center hover:bg-transparent hover:text-green-500">
                  <AiOutlineAlignLeft className="mr-1" /> Publish
                </button>
              </div>
            </div>
            <div className="p-2 rounded-lg m-1">
              <h1 className="text-xl">
                <div className="mb-6">
                  <label className="block mb-2 text-lg font-bold text-gray-900 dark:text-gray-300">
                    Title
                  </label>
                  <input
                    name="title"
                    type="text"
                    onChange={handleOnChange}
                    value={questions.title}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your title here ..."
                    required
                  />
                </div>

                <div className="mb-6 w-full">
                  <label className="block mb-2 text-lg font-bold text-gray-900 dark:text-gray-300">
                    Content
                  </label>
                  <textarea
                    name="content"
                    type="text"
                    onChange={handleOnChange}
                    value={question.content}
                    placeholder="Write your Question here"
                    rows="8"
                    required
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 font-thin text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </h1>
              <div className="flex justify-between">
                <div></div>
                <div className="flex ">
                  <button
                    onClick={handleSaveQuestion}
                    className="px-4 py-2 mr-2 bg-blue-500 text-sm text-white rounded-md flex justify-center items-center hover:bg-transparent hover:text-green-500"
                  >
                    <FiSave className="mr-1" /> Save
                  </button>
                  <button
                    onClick={handleDeleteQuestion}
                    className="px-4 py-2 bg-red-500 text-sm text-white  rounded-md flex justify-center items-center hover:bg-transparent hover:text-green-500"
                  >
                    <RiDeleteBin2Fill className="mr-1" /> Delete
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AskQuestion;
