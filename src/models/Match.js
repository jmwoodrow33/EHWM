
export class Match {
  constructor(type, participants, titleMatch = false) {
    this.type = type;
    this.participants = participants;
    this.winner = null;
    this.titleMatch = titleMatch;
  }
}
