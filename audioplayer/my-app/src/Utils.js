export const secondToMinutes = (duration) => {
  console.log("duration", duration);
  if (!duration) {
    duration = 0;
  }

  const hours = Math.floor(duration / 3600);
  const mins = Math.floor((duration % 3600) / 60);
  const secs = Math.floor(duration % 60);

  const HH = String(hours).padStart(2, 0);
  const MM = String(mins).padStart(2, 0);
  const SS = String(secs).padStart(2, 0);
  const time = `${HH}:${MM}:${SS}`;

  //   console.log("hours", hours);
  //   console.log("mins", mins);
  //   console.log("secs", secs);
  //   console.log("time", time);
  return time;

  //   // Hours, minutes and seconds
  //   const hrs = ~~(duration / 3600);
  //   const mins = ~~((duration % 3600) / 60);
  //   const secs = ~~duration % 60;

  //   // Output like "1:01" or "4:03:59" or "123:03:59"
  //   let ret = "";

  //   if (hrs <= 9) {
  //     ret += "0" + hrs + ":";
  //   } else {
  //     ret += hrs + ":";
  //   }

  //   if (mins <= 9) {
  //     ret += "0" + mins + ":";
  //   } else {
  //     ret += mins + ":";
  //   }

  //   if (secs <= 9) {
  //     ret += "0" + secs;
  //   } else {
  //     ret += secs;
  //   }

  //   // ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  //   // ret += "" + secs;
  //   return ret;
};
