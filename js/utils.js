const ALERT_SHOW_TIME = 5000;

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function proofMaxLeight (string, length){
  return string.length <= length;
}

// получение случайного элемента массива
const getRandomArrayElement = (array) =>
  array[getRandomPositiveInteger(0, array.length - 1)];


// функция, которая будет показывать сообщение с ошибкой на 5 секунд.
const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};


export { getRandomPositiveInteger, proofMaxLeight, getRandomArrayElement, showAlert};
