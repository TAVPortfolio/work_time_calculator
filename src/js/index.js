const getTimeDifference = () => {
  const [h1, m1] = document
    .getElementById('startTime')
    .value.split(':')
    .map(Number);
  const [h2, m2] = document
    .getElementById('endTime')
    .value.split(':')
    .map(Number);
  const diff = Math.abs(h2 * 60 + m2 - (h1 * 60 + m1));
  const [hours, minutes] = [Math.floor(diff / 60), diff % 60];
  const fractionOfHour = minutes / 60;

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedFractionOfHour = (hours + fractionOfHour).toFixed(2);

  return `${formattedHours}:${formattedMinutes} (${formattedFractionOfHour})`;
};

document.querySelector('.form__btn').addEventListener('click', (e) => {
  e.preventDefault;
  document.querySelector('.result__item').innerHTML = getTimeDifference();
});
