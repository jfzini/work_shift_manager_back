const formatShift = (shift) => {
  const shiftStart = new Date(shift.shiftStart);
  const shiftBreakStart = new Date(shift.shiftBreakStart);
  const shiftBreakEnd = new Date(shift.shiftBreakEnd);
  const shiftEnd = new Date(shift.shiftEnd);

  const firstHalf = (shiftBreakStart - shiftStart) / (1000 * 60);
  const secondHalf = (shiftEnd - shiftBreakEnd) / (1000 * 60);
  const totalShift = firstHalf + secondHalf;

  return totalShift;
};

module.exports = formatShift;