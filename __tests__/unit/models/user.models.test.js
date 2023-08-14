const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/configs/connection');
const UserModel = require('../../../src/models/user.models');

// mocks
const { getAllFromDB, getAllFromModel, getByIdFromDB, getByIdFromModel } = require('../mocks/models.mock');


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
});