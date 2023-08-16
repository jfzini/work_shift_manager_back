const getAllFromDB = [
  [
    {
      user_id: 1,
      user_name: 'Usuário Teste',
      user_email: 'email_teste@teste.com',
      work_shift: 480,
    },
    {
      user_id: 2,
      user_name: 'Usuário Teste 2',
      user_email: 'email_teste2@teste.com',
      work_shift: 480,
    },
  ],
  null,
];

const getAllFromModel = [
  {
    userId: 1,
    userName: 'Usuário Teste',
    userEmail: 'email_teste@teste.com',
    workShift: 480,
  },
  {
    userId: 2,
    userName: 'Usuário Teste 2',
    userEmail: 'email_teste2@teste.com',
    workShift: 480,
  },
];

const getByIdFromDB = [
  [
    {
      user_id: 1,
      user_name: 'Usuário Teste',
      user_email: 'email_teste@teste.com',
      work_shift: 480,
    },
  ],
  null,
];

const getByIdFromModel = {
  userId: 1,
  userName: 'Usuário Teste',
  userEmail: 'email_teste@teste.com',
  workShift: 480,
};

const getShiftsByIdFromDB = [
  [
    {
      user_id: 1,
      shift_start: '2020-01-01T08:00:00.000Z',
      shift_break_start: '2020-01-01T12:00:00.000Z',
      shift_break_end: '2020-01-01T13:00:00.000Z',
      shift_end: '2020-01-01T17:30:00.000Z',
      total_shift: 510,
    },
    {
      user_id: 1,
      shift_start: '2020-01-02T08:00:00.000Z',
      shift_break_start: '2020-01-02T12:00:00.000Z',
      shift_break_end: '2020-01-02T13:00:00.000Z',
      shift_end: '2020-01-02T17:00:00.000Z',
      total_shift: 480,
    },
    {
      user_id: 1,
      shift_start: '2020-01-03T08:00:00.000Z',
      shift_break_start: '2020-01-03T12:00:00.000Z',
      shift_break_end: '2020-01-03T13:00:00.000Z',
      shift_end: '2020-01-03T17:00:00.000Z',
      total_shift: 480,
    },
    {
      user_id: 1,
      shift_start: '2020-01-04T08:00:00.000Z',
      shift_break_start: '2020-01-04T12:00:00.000Z',
      shift_break_end: '2020-01-04T13:00:00.000Z',
      shift_end: '2020-01-04T17:00:00.000Z',
      total_shift: 480,
    },
    {
      user_id: 1,
      shift_start: '2020-01-05T08:00:00.000Z',
      shift_break_start: '2020-01-05T12:00:00.000Z',
      shift_break_end: '2020-01-05T13:00:00.000Z',
      shift_end: '2020-01-05T17:00:00.000Z',
      total_shift: 480,
    },
    {
      user_id: 1,
      shift_start: '2020-01-06T08:00:00.000Z',
      shift_break_start: '2020-01-06T12:00:00.000Z',
      shift_break_end: '2020-01-06T13:00:00.000Z',
      shift_end: '2020-01-06T17:40:00.000Z',
      total_shift: 520,
    },
    {
      user_id: 1,
      shift_start: '2020-01-07T08:00:00.000Z',
      shift_break_start: '2020-01-07T12:00:00.000Z',
      shift_break_end: '2020-01-07T13:00:00.000Z',
      shift_end: '2020-01-07T17:00:00.000Z',
      total_shift: 480,
    },
    {
      user_id: 1,
      shift_start: '2020-01-08T08:00:00.000Z',
      shift_break_start: '2020-01-08T12:00:00.000Z',
      shift_break_end: '2020-01-08T13:00:00.000Z',
      shift_end: '2020-01-08T17:00:00.000Z',
      total_shift: 480,
    },
    {
      user_id: 1,
      shift_start: '2020-01-09T08:00:00.000Z',
      shift_break_start: '2020-01-09T12:00:00.000Z',
      shift_break_end: '2020-01-09T13:00:00.000Z',
      shift_end: '2020-01-09T17:00:00.000Z',
      total_shift: 480,
    },
    {
      user_id: 1,
      shift_start: '2020-01-10T08:00:00.000Z',
      shift_break_start: '2020-01-10T12:00:00.000Z',
      shift_break_end: '2020-01-10T13:00:00.000Z',
      shift_end: '2020-01-10T17:00:00.000Z',
      total_shift: 480,
    },
    {
      user_id: 1,
      shift_start: '2020-01-11T08:00:00.000Z',
      shift_break_start: '2020-01-11T12:00:00.000Z',
      shift_break_end: '2020-01-11T13:00:00.000Z',
      shift_end: '2020-01-11T17:00:00.000Z',
      total_shift: 480,
    },
    {
      user_id: 1,
      shift_start: '2020-01-12T08:00:00.000Z',
      shift_break_start: '2020-01-12T12:00:00.000Z',
      shift_break_end: '2020-01-12T13:00:00.000Z',
      shift_end: '2020-01-12T17:00:00.000Z',
      total_shift: 480,
    },
    {
      user_id: 1,
      shift_start: '2020-01-13T08:00:00.000Z',
      shift_break_start: '2020-01-13T12:00:00.000Z',
      shift_break_end: '2020-01-13T13:00:00.000Z',
      shift_end: '2020-01-13T17:00:00.000Z',
      total_shift: 480,
    },
    {
      user_id: 1,
      shift_start: '2020-01-14T08:00:00.000Z',
      shift_break_start: '2020-01-14T12:00:00.000Z',
      shift_break_end: '2020-01-14T13:00:00.000Z',
      shift_end: '2020-01-14T17:00:00.000Z',
      total_shift: 480,
    },
  ],
  null,
];

const getShiftsByIdFromModel = {
  userId: 1,
  shifts: [
    {
      shiftStart: '2020-01-01T08:00:00.000Z',
      shiftBreakStart: '2020-01-01T12:00:00.000Z',
      shiftBreakEnd: '2020-01-01T13:00:00.000Z',
      shiftEnd: '2020-01-01T17:30:00.000Z',
      totalShift: 510,
    },
    {
      shiftStart: '2020-01-02T08:00:00.000Z',
      shiftBreakStart: '2020-01-02T12:00:00.000Z',
      shiftBreakEnd: '2020-01-02T13:00:00.000Z',
      shiftEnd: '2020-01-02T17:00:00.000Z',
      totalShift: 480,
    },
    {
      shiftStart: '2020-01-03T08:00:00.000Z',
      shiftBreakStart: '2020-01-03T12:00:00.000Z',
      shiftBreakEnd: '2020-01-03T13:00:00.000Z',
      shiftEnd: '2020-01-03T17:00:00.000Z',
      totalShift: 480,
    },
    {
      shiftStart: '2020-01-04T08:00:00.000Z',
      shiftBreakStart: '2020-01-04T12:00:00.000Z',
      shiftBreakEnd: '2020-01-04T13:00:00.000Z',
      shiftEnd: '2020-01-04T17:00:00.000Z',
      totalShift: 480,
    },
    {
      shiftStart: '2020-01-05T08:00:00.000Z',
      shiftBreakStart: '2020-01-05T12:00:00.000Z',
      shiftBreakEnd: '2020-01-05T13:00:00.000Z',
      shiftEnd: '2020-01-05T17:00:00.000Z',
      totalShift: 480,
    },
    {
      shiftStart: '2020-01-06T08:00:00.000Z',
      shiftBreakStart: '2020-01-06T12:00:00.000Z',
      shiftBreakEnd: '2020-01-06T13:00:00.000Z',
      shiftEnd: '2020-01-06T17:40:00.000Z',
      totalShift: 520,
    },
    {
      shiftStart: '2020-01-07T08:00:00.000Z',
      shiftBreakStart: '2020-01-07T12:00:00.000Z',
      shiftBreakEnd: '2020-01-07T13:00:00.000Z',
      shiftEnd: '2020-01-07T17:00:00.000Z',
      totalShift: 480,
    },
    {
      shiftStart: '2020-01-08T08:00:00.000Z',
      shiftBreakStart: '2020-01-08T12:00:00.000Z',
      shiftBreakEnd: '2020-01-08T13:00:00.000Z',
      shiftEnd: '2020-01-08T17:00:00.000Z',
      totalShift: 480,
    },
    {
      shiftStart: '2020-01-09T08:00:00.000Z',
      shiftBreakStart: '2020-01-09T12:00:00.000Z',
      shiftBreakEnd: '2020-01-09T13:00:00.000Z',
      shiftEnd: '2020-01-09T17:00:00.000Z',
      totalShift: 480,
    },
    {
      shiftStart: '2020-01-10T08:00:00.000Z',
      shiftBreakStart: '2020-01-10T12:00:00.000Z',
      shiftBreakEnd: '2020-01-10T13:00:00.000Z',
      shiftEnd: '2020-01-10T17:00:00.000Z',
      totalShift: 480,
    },
    {
      shiftStart: '2020-01-11T08:00:00.000Z',
      shiftBreakStart: '2020-01-11T12:00:00.000Z',
      shiftBreakEnd: '2020-01-11T13:00:00.000Z',
      shiftEnd: '2020-01-11T17:00:00.000Z',
      totalShift: 480,
    },
    {
      shiftStart: '2020-01-12T08:00:00.000Z',
      shiftBreakStart: '2020-01-12T12:00:00.000Z',
      shiftBreakEnd: '2020-01-12T13:00:00.000Z',
      shiftEnd: '2020-01-12T17:00:00.000Z',
      totalShift: 480,
    },
    {
      shiftStart: '2020-01-13T08:00:00.000Z',
      shiftBreakStart: '2020-01-13T12:00:00.000Z',
      shiftBreakEnd: '2020-01-13T13:00:00.000Z',
      shiftEnd: '2020-01-13T17:00:00.000Z',
      totalShift: 480,
    },
    {
      shiftStart: '2020-01-14T08:00:00.000Z',
      shiftBreakStart: '2020-01-14T12:00:00.000Z',
      shiftBreakEnd: '2020-01-14T13:00:00.000Z',
      shiftEnd: '2020-01-14T17:00:00.000Z',
      totalShift: 480,
    },
  ],
};

module.exports = {
  getAllFromDB,
  getAllFromModel,
  getByIdFromDB,
  getByIdFromModel,
  getShiftsByIdFromDB,
  getShiftsByIdFromModel,
};
