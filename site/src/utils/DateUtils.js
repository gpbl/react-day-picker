export function isPastDay(d) {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  return d < today;
}

export function isSameDay(d1, d2) {
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);
  return d1.getTime() === d2.getTime();
}

export function isBetween(d, d1, d2) {
  d.setHours(0, 0, 0, 0);
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);
  return d1 < d && d < d2;
}
