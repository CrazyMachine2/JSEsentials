class ScoreBoard {
    constructor() {
        this.scores = [];
    }

    getNewScore() {
        return {
            points: 0
        }
    }

    submitScore() {
        this.scores.push(score);
    }
}