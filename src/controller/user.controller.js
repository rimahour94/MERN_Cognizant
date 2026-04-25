const { userCreate } = require("../database/db_queries/user.query");
const userCreation = async (req, res) => {
  try {
    const { fullname, email, password, role} = req.body;

    if (!fullname || !email || !password) {
      return res
        .status(404)
        .json({ message: "Fullname, email or password is missing." });
    }

    const userRes = await userCreate({ fullname, email, password, role });
    return res.status(200).json({ message: "User created Successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  userCreation,
};
