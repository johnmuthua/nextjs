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
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("on on delete");

    localStorage.removeItem("2code_blog_title");
    localStorage.removeItem("2code_blog_content");
    const question = {
      title: "",
      content: "",
    };
    setQuestion(question);
  };

  const value = {
    question,
    setQuestion,
    handleOnChange,
    handleClick,
    modal,
    handleSave,
    handleDelete,
  };
  return (
    <QuestionPage.Provider value={value}>{children}</QuestionPage.Provider>
  );
};
