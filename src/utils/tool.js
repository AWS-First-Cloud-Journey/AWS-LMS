export const coverSecondToString = (second) => {
  return Math.floor(second / 60) + "m" + (Math.floor(second % 60) + "s").slice(-3) ;
};
