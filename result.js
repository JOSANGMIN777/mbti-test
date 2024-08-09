document.addEventListener('DOMContentLoaded', function () {
  const resultElement = document.getElementById('result');
  const restartButton = document.getElementById('restart-button');

  if (localStorage.getItem('mbti_result')) {
    const mbtiResult = localStorage.getItem('mbti_result');
    resultElement.textContent = `${mbtiResult} 입니다!`;
  } else {
    resultElement.textContent = '아직 테스트를 진행하지 않았습니다!';
    restartButton.textContent = '테스트 하러 가기';
    restartButton.addEventListener('click', function () {
      window.location.href = './index.html';
    });
  }
});
