/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */
/* Подставляй текст нового предсказания в .current-forecast h1 */
/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */
/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */
/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */
const button = document.querySelector('.forecast-btn');
const newPrediction = document.querySelector('h1');
const newPercent = document.querySelector('.current-forecast p');
const div = document.querySelector('#forecast-item');





button.addEventListener('click', function newText() {
    newPrediction.textContent = getRandomPrediction(predictions);
    newPercent.textContent = "Вероятность: " + randomNumber(0, 100) + "%";
});


const pastText = document.createElement('div').classList.add('forecast-item');
const pastPrediction = document.createElement('h3');
const pastPercent = document.createElement('p');
div.prepend(pastText);
pastText.prepend(pastPrediction);
pastPrediction.after(pastPercent);

/*button.addEventListener('click', function pText() {
    const pastText = document.createElement('div').classList.add('forecast-item');
    const pastPrediction = document.createElement('h3');
    const pastPercent = document.createElement('p');

    pastPrediction = '';
    

    pastPrediction.textContent = newPrediction * /
});*/

let predictions = [
    "Готовьтесь к романтическим приключениям.",
    "Вам пора отдохнуть.",
    "Время и терпение,  вас ждут много сюрпризов!",
    "Вас ждет приятный сюрприз.",
    "На неделе жди письмо. Уже отправили его."
];

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

function getRandomPrediction(predictions) {
    return predictions[randomNumber(0, predictions.length - 1)]
};

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
