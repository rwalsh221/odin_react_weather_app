export const formatTime = (unixTimestamp, unixTimeZone) => {
  const time = unixTimestamp + unixTimeZone;

  let date = new Date(time * 1000);
  // Hours part from the timestamp
  let hours = date.getHours();
  // Minutes part from the timestamp
  let minutes = '0' + date.getMinutes();
  // Seconds part from the timestamp
  let seconds = '0' + date.getSeconds();

  // Will display time in 10:30:23 format
  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
};

export const formatDate = (unixTimeStamp, unixTimeZone) => {
  const time = unixTimeStamp + unixTimeZone;
  const date = new Date(time * 1000);

  const day = date.getDate();

  const month = date.getMonth() + 1;

  const year = date.getFullYear();

  return `${day.length > 1 ? day : `0${day}`}/${
    month.length > 1 ? month : `0${month}`
  }/${year}`;
};
