export interface IQuestion {
  id: number;
  lesson: string;
  question: string;
  correctAnswer: AnswerType;
  currentAnswer: AnswerType | any;
  answers: IAnswers[];
}

export interface IAnswers {
  optionName: AnswerType;
  text: string;
}
export type AnswerType = "A" | "B" | "C" | "D" | "E";
