const reduceUserShifts = (shifts, id) => shifts.reduce(
    (acc, { companyId, shiftStart, shiftBreakStart, shiftBreakEnd, shiftEnd, workedHours }) => ({
        userId: id,
        shifts: [
          ...acc.shifts,
          {
            companyId,
            shiftStart,
            shiftBreakStart,
            shiftBreakEnd,
            shiftEnd,
            workedHours,
          },
        ],
      }),
    { userId: id, shifts: [] },
  );

module.exports = { reduceUserShifts };
