/*17. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm
    */
const date = new Date();

// YYYY-MM-DD HH:mm
const ymd =
  date.toISOString().split("T")[0] +
  " " +
  date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
console.log(ymd); // prints a string like "2023-01-01 10:16 PM"

// DD-MM-YYYY HH:mm
const dmy =
  date
    .toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-") +
  " " +
  date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
console.log(dmy); // prints a string like "01-01-2023 10:16 PM"

// DD/MM/YYYY HH:mm

const dmy2 =
  date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }) +
  " " +
  date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
console.log(dmy2); // prints a string like "01/01/2023 10:16 PM"
