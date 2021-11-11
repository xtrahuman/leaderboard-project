const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5CQiWqcnd1y241sjC6Ef/scores';
const add = document.getElementById('scores-form');

const collectScores = async () => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data.result;
};

const submitScores = async (e) => {
  e.preventDefault();
  const userName = document.getElementById('player').value;
  const score = document.getElementById('scores').value;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data.result;
};

add.addEventListener('submit', submitScores);

export { collectScores as default };
