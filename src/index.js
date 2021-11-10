import './style.css';

const leaderScore = document.querySelector('.recent-scores');
const arr = [];

class Scores {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

displayScores = (scoreOutput) => {
  const allscore = scoreOutput.map((eachScore) => `<div class="score-list">
<p>${eachScore.name}: ${eachScore.score}</p>
</div>
`);
  leaderScore.innerHTML = allscore.join('');
}
}

const InputScores = (names, newScores) => {
  const newPlayer = new Scores(names, newScores);
  arr.push(newPlayer);
  newPlayer.displayScores(arr);
};

window.addEventListener('DOMContentLoaded', () => {
  InputScores('john', 21);
  InputScores('peter', 40);
  InputScores('ade', 50);
  InputScores('miracle', 50);
});
