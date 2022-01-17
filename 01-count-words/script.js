function countWord(phrase = '', word = '') {
  const words = phrase.toLowerCase().split(' ');
  return words.filter(elemet => elemet == word.toLowerCase()).length;
}

function setCounterWord(value = 0) {
  document.getElementById('counter').innerHTML = value;
}

function handlerCountWord() {
  const $phrase = document.getElementById('phrase');
  const $word = document.getElementById('word');
  const callCountWord = function () {
    setCounterWord(countWord($phrase.value, $word.value));
  };
  $phrase.addEventListener('change', callCountWord);
  $word.addEventListener('change', callCountWord);
}

handlerCountWord();
