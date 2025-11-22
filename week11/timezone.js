const UTC = "2025-11-01T13:57:31.000Z"
const userLocalTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(`TIMEZONE : ${userLocalTimeZone}`);


function convertToLocalTimezone(time){
  const UTCdate = new Date(time)
  const day = String(UTCdate.getUTCDate()).padStart(2, "0");
  const month = String(UTCdate.getUTCMonth() + 1).padStart(2, "0");
  const year = UTCdate.getUTCFullYear();
  const second = String(UTCdate.getUTCSeconds())
  const minute = String(UTCdate.getUTCMinutes())
  const hour = String(UTCdate.getUTCHours())
  return `${day}/${month}/${year}, ${hour}:${minute}:${second}`;
}



function formatDATETIMEZONE(time){
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timezonedTime = new Date(time)
  
  const timeformat = {
    timeZone: timezone,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }
  
  const formatter = new Intl.DateTimeFormat("en-GB", timeformat);
  const formattedString = formatter.format(timezonedTime);
  
  return `${formattedString} (${timezone})`;
}
const formatedTimezone1 = convertToLocalTimezone(UTC)
const formatedTimezone2 = formatDATETIMEZONE(UTC)


console.log(`function1 : ${formatedTimezone1}`);
console.log(`function2 : ${formatedTimezone2}`);