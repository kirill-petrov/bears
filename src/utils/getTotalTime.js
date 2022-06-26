export default function getTotalTime(arrivalMs, departureMs, minutes) {
  const lanchMs = minutes * 60000;
  const durationMs = departureMs - arrivalMs - lanchMs;
  let hours = parseInt((durationMs / (1000 * 60 * 60)) % 24);
  let mins = parseInt((durationMs / (1000 * 60)) % 60);

  hours = hours < 10 ? '0' + hours : hours;
  mins = mins < 10 ? '0' + mins : mins;

  return hours.concat(':').concat(mins);
}
