export const formatTime = (unixTimestamp, unixTimeZone) => {
  const time = unixTimestamp + unixTimeZone;

  // TIMES BY 1000 TO CONVERT INPUT INTO MILLISECONDS FOR NEW DATE OBJECT
  const date = new Date(time * 1000);
  // Hours part from the timestamp
  const hours = date.getHours().toString();
  // Minutes part from the timestamp
  const minutes = '0' + date.getMinutes();
  // Seconds part from the timestamp
  const seconds = '0' + date.getSeconds();

  // Will display time in 10:30:23 format
  return `${hours.length < 2 ? `0${hours}` : hours} : ${minutes.substr(-2)}`;
};

export const formatDate = (unixTimeStamp, unixTimeZone) => {
  const time = unixTimeStamp + unixTimeZone;

  // TIMES BY 1000 TO CONVERT INPUT INTO MILLISECONDS FOR NEW DATE OBJECT
  const date = new Date(time * 1000);

  const day = date.getDate();

  const month = date.getMonth() + 1;

  const year = date.getFullYear();

  return `${day.toString().length > 1 ? day : `0${day}`}/${
    month.toString().length > 1 ? month : `0${month}`
  }/${year}`;
};
