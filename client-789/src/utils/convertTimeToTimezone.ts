export default function convertTimeToTimezone (time: Date, offset: number)  {
    const utc = time.getTime() + time.getTimezoneOffset() * 60000;
    const newTime = new Date(utc + 3600000 * offset);
    return newTime;
  };