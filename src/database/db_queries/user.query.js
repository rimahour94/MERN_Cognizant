const { UserModel } = require("../schema");
const userCreate = async (data) => {
  try {
    const user = await UserModel.create(data);
    return user;
  } catch (err) {
    throw Error(err.message);
  }
};

module.exports = {
  userCreate,
};
