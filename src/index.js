import './style.css';
import collectScores from './api.js';

const add = document.getElementById('scores-form');
const leaderScore = document.querySelector('.recent-scores');
const refresh = document.getElementById('refresh');

add.addEventListener('submit', () => {
  document.getElementById('player').value = '';
  document.getElementById('scores').value = '';
});

const displayScores = (scoreOutput) => {
  const allscore = scoreOutput.map((eachScore) => `<div class="score-list">
<p>${eachScore.user}: ${eachScore.score}</p>
</div>
`);
  leaderScore.innerHTML = allscore.join('');
};

const collect = async () => {
  const update = await collectScores();
  update.sort((firstItem, secondItem) => secondItem.score - firstItem.score);

  displayScores(update);
};

collect();

refresh.addEventListener('click', collect);