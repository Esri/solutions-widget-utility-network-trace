/**
 * Check if date is within a min and max
 */
function inRange(date, min, max) {
  const time = date.getTime();
  const afterMin = !(min instanceof Date) || time >= min.getTime();
  const beforeMax = !(max instanceof Date) || time <= max.getTime();
  return afterMin && beforeMax;
}
/**
 * Ensures date is within range,
 * returns min or max if out of bounds
 */
function dateFromRange(date, min, max) {
  if (!(date instanceof Date)) {
    return null;
  }
  const time = date.getTime();
  const beforeMin = min instanceof Date && time < min.getTime();
  const afterMax = max instanceof Date && time > max.getTime();
  if (beforeMin) {
    return min;
  }
  if (afterMax) {
    return max;
  }
  return date;
}
/**
 * Parse an iso8601 string (YYYY-mm-dd) into a valid date.
 * TODO: handle time when time of day UI is added
 */
function dateFromISO(iso8601) {
  if (iso8601 instanceof Date) {
    return iso8601;
  }
  if (!iso8601 || typeof iso8601 !== "string") {
    return null;
  }
  const d = iso8601.split(/[: T-]/).map(parseFloat);
  const date = new Date(d[0], (d[1] || 1) - 1, d[2] || 1);
  date.setFullYear(d[0]);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid ISO 8601 date: "${iso8601}"`);
  }
  return date;
}
/**
 * Return first portion of ISO string (YYYY-mm-dd)
 */
function dateToISO(date) {
  if (typeof date === "string") {
    return date;
  }
  if (date instanceof Date) {
    return date.toISOString().split("T")[0];
  }
  return "";
}
/**
 * Check if two dates are the same day, month, year
 */
function sameDate(d1, d2) {
  return (d1 instanceof Date &&
    d2 instanceof Date &&
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear());
}
/**
 * Get a date one month in the past
 */
function prevMonth(date) {
  const month = date.getMonth();
  const nextDate = new Date(date);
  nextDate.setMonth(month - 1);
  // date doesn't exist in new month, use last day
  if (month === nextDate.getMonth()) {
    return new Date(date.getFullYear(), month, 0);
  }
  return nextDate;
}
/**
 * Get a date one month in the future
 */
function nextMonth(date) {
  const month = date.getMonth();
  const nextDate = new Date(date);
  nextDate.setMonth(month + 1);
  // date doesn't exist in new month, use last day
  if ((month + 2) % 7 === nextDate.getMonth() % 7) {
    return new Date(date.getFullYear(), month + 2, 0);
  }
  return nextDate;
}
/**
 * Translate a number into a given locals numeral system
 */
function localizeNumber(num, localeData) {
  return String(num)
    .split("")
    .map((i) => localeData.numerals[i])
    .join("");
}
/**
 * Calculate actual number from localized string
 */
function parseNumber(str, localeData) {
  const numerals = "0123456789";
  return parseInt(str
    .split("")
    .map((i) => numerals[localeData.numerals.indexOf(i)])
    .filter((num) => num)
    .join(""));
}
/**
 * Parse numeric units for day, month, and year from a localized string
 * month starts at 0 (can pass to date constructor)
 */
function parseDateString(str, localeData) {
  const { separator, unitOrder } = localeData;
  const order = getOrder(unitOrder);
  const values = replaceArabicNumerals(str).split(separator);
  return {
    day: parseInt(values[order.indexOf("d")]),
    month: parseInt(values[order.indexOf("m")]) - 1,
    year: parseInt(values[order.indexOf("y")])
  };
}
/**
 * Convert eastern arbic numerals
 */
function replaceArabicNumerals(str = "") {
  return str
    .replace(/[\u0660-\u0669]/g, (c) => (c.charCodeAt(0) - 0x0660))
    .replace(/[\u06f0-\u06f9]/g, (c) => (c.charCodeAt(0) - 0x06f0));
}
/**
 * Based on the unitOrder string, find order of month, day, and year for locale
 */
function getOrder(unitOrder) {
  const signifiers = ["d", "m", "y"];
  const order = unitOrder.toLowerCase();
  return signifiers.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}
/**
 * Get number of days between two dates
 */
function getDaysDiff(date1, date2) {
  const ts1 = date1.getTime();
  const ts2 = date2.getTime();
  return Math.abs(ts1 - ts2) * 1000 * 60 * 60 * 24;
}

export { dateFromRange as a, dateToISO as b, getOrder as c, dateFromISO as d, prevMonth as e, parseNumber as f, getDaysDiff as g, inRange as i, localizeNumber as l, nextMonth as n, parseDateString as p, sameDate as s };