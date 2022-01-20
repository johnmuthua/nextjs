import { createContext, useState } from "react";

export const AskQuestionContext = createContext({});

export const AskQuestionContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const [question, setQuestion] = useState({
    title: "",
    content: "",
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    setQuestion((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  const handleSaveQuestion = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "2code_question_title",
      JSON.stringify(question.title)
    );
    localStorage.setItem(
      "2code_question_content",
      JSON.stringify(question.content)
    );
  };

  const handleDeleteQuestion = (e) => {
    e.preventDefault();
    localStorage.removeItem("2code_question_title");
    localStorage.removeItem("2code_question_content");
    const question = {
      title: "",
      content: "",
    };
    setQuestion(question);
  };

  const value = {
    modal,
    question,
    handleClick,
    handleSaveQuestion,
    handleDeleteQuestion,
    handleOnChange,
  };
  return (
    <AskQuestionContext.Provider value={value}>
      {children}
    </AskQuestionContext.Provider>
  );
};
