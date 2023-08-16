const reduceUserShifts = (shifts, id) => shifts.reduce(
    (acc, { companyId, shiftStart, shiftBreakStart, shiftBreakEnd, shiftEnd, totalShift }) => ({
        userId: id,
        shifts: [
          ...acc.shifts,
          {
            shiftStart,
            shiftBreakStart,
            shiftBreakEnd,
            shiftEnd,
            totalShift,
          },
        ],
      }),
    { userId: id, shifts: [] },
  );

module.exports = { reduceUserShifts };
