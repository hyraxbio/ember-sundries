import timeStringToMilliseconds from './time-string-to-milliseconds';

export default function dateFromNow(interval, direction) {
  const dateFromNow = new Date();
  const dateShift = direction === 'past' ? -1 : 1;
  dateFromNow.setTime(
    dateFromNow.getTime() + dateShift * timeStringToMilliseconds(interval),
  );
  return dateFromNow;
}
