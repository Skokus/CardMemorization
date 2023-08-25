export class Card{
  name: string;
  isCorrect: CorrectState;
  constructor(name: string){
    this.name = name;
    this.isCorrect = CorrectState.none;
  }
}

export enum CorrectState{
  "none",
  "correct",
  "notCorrect"
}