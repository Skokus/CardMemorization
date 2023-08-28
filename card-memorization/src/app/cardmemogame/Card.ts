export class Card{
  name: string;
  isCorrect: CorrectState;
  constructor(name: string){
    this.name = name;
    this.isCorrect = CorrectState.NONE;
  }
}

export enum CorrectState{
  NONE = "none",
  CORRECT = "correct",
  NOTCORRECT = "notCorrect"
}