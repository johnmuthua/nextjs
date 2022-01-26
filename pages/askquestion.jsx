import Header from "../components/header/Header";
import AskQuestion from "../components/question/AskQuestion";
import { AskQuestionContextProvider } from "../context/QuestionPageContext";

function askquestion() {
  return (
    <AskQuestionContextProvider>
      <AskQuestion />
      <Header />
    </AskQuestionContextProvider>
  );
}

export default askquestion;
