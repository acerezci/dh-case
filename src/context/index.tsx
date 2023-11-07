import { IQuestion } from "../model";
import { questions as _questions } from "../mock/data";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const AppContext = createContext<IAppContext>({} as any);
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  const questions = [..._questions];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>(
    questions[0]
  );
  const [answeredQuestions, setAnsweredQuestions] = useState<IQuestion[]>([]);
  const [finishedTest, setFinishedTest] = useState(false);

  const nextQuestion = () => {
    const nextIndex = currentIndex + 1;

    if (questions[nextIndex]) {
      setCurrentIndex(nextIndex);

      return;
    }

    setCurrentIndex(0);
  };

  const prevQuestion = () => {
    const prevIndex = currentIndex - 1;

    if (questions[prevIndex]) {
      setCurrentIndex(prevIndex);

      return;
    }

    setCurrentIndex(0);
  };

  useEffect(() => {
    setCurrentQuestion(questions[currentIndex]);
  }, [currentIndex]);

  return (
    <AppContext.Provider
      value={{
        nextQuestion,
        prevQuestion,
        currentQuestion,
        questionsCount: questions.length,
        currentIndex,
        questions,
        answeredQuestions,
        setAnsweredQuestions,
        finishedTest,
        setFinishedTest,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

interface IAppContext {
  nextQuestion: () => void;
  prevQuestion: () => void;
  currentQuestion: IQuestion;
  questionsCount: number;
  currentIndex: number;
  questions: IQuestion[];
  setAnsweredQuestions: (e: IQuestion[]) => void;
  answeredQuestions: IQuestion[];
  setFinishedTest: (e: boolean) => void;
  finishedTest: boolean;
}
