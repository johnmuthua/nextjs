import AskQuestion from "../components/question/AskQuestion";
import { AskQuestionContextProvider } from "../context/QuestionPageContext";

function askquestion() {
  return (
    <AskQuestionContextProvider>
      <AskQuestion />
    </AskQuestionContextProvider>
  );
}

export default askquestion;
