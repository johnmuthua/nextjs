import { useState, createContext } from "react";

export const QuestionPage = createContext({});

export const QuestionPageProvider = ({ children }) => {
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

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("2code_blog_title", JSON.stringify(question.title));
    localStorage.setItem(
      "2code_blog_content",
      JSON.stringify(question.content)
    );
    console.log("publisshed");
  };

  const value = {
    question,
    setQuestion,
    handleOnChange,
    handleClick,
    modal,
    handleSave,
  };
  return (
    <QuestionPage.Provider value={value}>{children}</QuestionPage.Provider>
  );
};
