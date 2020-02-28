const { Users } = require("../../models");
const { hashPassword, comparedPassword } = require("../../helpers");
const jwt = require("jsonwebtoken");

module.exports = {
  //users/
  getAll: async (req, res) => {
    try {
      const result = await Users.find({});

      // const filterCar = result.filter(item => {
      //   if(item.judul === "judul"){
      //     return item
      //   }
      // })

      res.status(200).send({
        message: "Show All data Users",
        data: result
      });
      // res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
  //users/
  addData: async (req, res) => {
    try {
      const data = req.body;
      const file = req.file;
      const hash = await hashPassword(req.body.password);

      const result = await Users.create({
        ...data,
        avatar: file === undefined ? null : file.path,
        password: hash
      });

      res.status(200).send({
        message: `New data user is successfully added`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  //users/id/:id
  deleteById: async (req, res) => {
    try {
      const getId = req.params._id;
      await Users.deleteOne({ _id: getId }, (err, result) => {
        if (err) {
          console.log(err);
        }
        res.status(200).send({
          message: `User with id : ${getId} has been deleted.`,
          data: result
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  //users/id/:id
  getById: async (req, res) => {
    try {
      const getId = req.params.id;
      const result = await Users.find({ _id: getId });
      res.status(200).send({
        message: `Get User By id = ${getId}`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  login: async (req, res) => {
    try {
      const result = await Users.findOne({ email: req.body.email });

      const compared = await comparedPassword(
        req.body.password,
        result.password
      );

      if (compared === true) {
        const { email, _id, username, firstname } = result;

        const token = jwt.sign(
          { email, _id, username, firstname },
          "INISECRET"
        );
        // const token = jwt.sign(
        //   { email, id, username, firstname },
        //   "INISECRET",
        //   { expiresIn: "1d" }
        // );

        res.status(200).send({
          message: "You are successfully logged in",
          token: token
        });
      } else {
        res.status(403).send({
          message: "You are not an user, please register first"
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
};
