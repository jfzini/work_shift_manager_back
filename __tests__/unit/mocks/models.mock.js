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


module.exports = {
  getAllFromDB,
  getAllFromModel,
  getByIdFromDB,
  getByIdFromModel,
};
