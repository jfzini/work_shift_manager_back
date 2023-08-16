const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/configs/connection');
const UserModel = require('../../../src/models/user.models');

// mocks
const {
  getAllFromDB,
  getAllFromModel,
  getByIdFromDB,
  getByIdFromModel,
  getShiftsByIdFromDB,
  getShiftsByIdFromModel,
} = require('../mocks/models.mock');

describe('UserModel', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('getAll should return all users', async function () {
    sinon.stub(connection, 'execute').resolves(getAllFromDB);
    const users = await UserModel.getAll();
    expect(users).to.be.an('array');
    expect(users).to.have.lengthOf(2);
    expect(users).to.deep.equal(getAllFromModel);
  });

  it('getById should return a user', async function () {
    sinon.stub(connection, 'execute').resolves(getByIdFromDB);
    const user = await UserModel.getById(1);
    expect(user).to.be.an('object');
    expect(user).to.deep.equal(getByIdFromModel);
  });

  it('getShiftsById should return a user with shifts', async function () {
    sinon.stub(connection, 'execute').resolves(getShiftsByIdFromDB);
    const user = await UserModel.getShiftsById(1);
    expect(user).to.be.an('object');
    expect(user).to.have.property('shifts');
    expect(user.shifts).to.be.an('array');
    expect(user.shifts).to.have.lengthOf(14);
    expect(user).to.deep.equal(getShiftsByIdFromModel)
  });
});
