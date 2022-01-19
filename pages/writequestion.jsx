import CodePage from "../components/editor/CodePage";
import Header from "../components/header/Header";
import { QuestionPageProvider } from "../context/CodePageContext";

const writequestion = () => {
  return (
    <QuestionPageProvider>
      <div className="bg-gradient-to-b from-stone-700 to-stone-900 pt-12 ">
        <CodePage />
        <Header />
      </div>
    </QuestionPageProvider>
  );
};

export default writequestion;
