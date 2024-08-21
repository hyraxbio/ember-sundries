export default function timeStringToMilliseconds(timeString) {
  const timeUnits = {
    h: 3600000, // 1 hour = 3600000 milliseconds
    m: 60000, // 1 minute = 60000 milliseconds
    s: 1000, // 1 second = 1000 milliseconds
  };

  let totalMilliseconds = 0;

  // Regular expression to match time units
  const regex = /(\d+)([hms])/g;
  let match;

  // Iterate over all matches
  while ((match = regex.exec(timeString)) !== null) {
    const value = parseInt(match[1], 10);
    const unit = match[2];
    totalMilliseconds += value * timeUnits[unit];
  }
  return totalMilliseconds;
}
