const validateUserFields = (req, res, next) => {
  const fields = req.body;
  const requiredFields = ['userName', 'userEmail', 'workShift'];
  const missingFields = requiredFields.filter((field) => !fields[field]);
  if (missingFields.length) {
    return res.status(400).json({ message: 'Missing fields', missingFields });
  }
  next();
};

const validateShiftFields = (req, res, next) => {
  const fields = req.body;
  const requiredFields = ['shiftStart', 'shiftBreakStart', 'shiftBreakEnd', 'shiftEnd'];
  const missingFields = requiredFields.filter((field) => !fields[field]);
  if (missingFields.length) {
    return res.status(400).json({ message: 'Missing fields', missingFields });
  }
  next();
};

module.exports = { validateUserFields, validateShiftFields };
