const { Blogs } = require("../../models");
var fs = require("fs");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Blogs.find();

      res.status(200).send({ message: "Show data Users", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  //users/
  addData: async (req, res) => {
    try {
      const data = req.body;
      const file = req.file;

      const result = await Blogs.create({
        ...data,
        avatar: file === undefined ? null : file.path
      });

      res.status(200).send({
        message: "New data user is successfully added",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  //blogs/id/:id
  addDataByIdUsers: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const file = req.file;

      const result = await Blogs.create({
        ...data,
        avatar: file === undefined ? null : file.path,
        idUsers: id
      });

      res.status(200).send({
        message: "New data user is successfully added",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateData: async (req, res) => {
    try {
      const data = req.body;
      const file = req.file;
      const id = req.params.id;

      const oldData = await Blogs.findOne({ _id: id }, (err, docs) => {
        return docs;
      });
      console.log(oldData.avatar);

      // if (file !== undefined) {
      //   //jika dirubah
      //   const fileimg = file.path;
      //   fs.unlinkSync("sample.txt");
      // }

      const result = await Blogs.findByIdAndUpdate(
        id,
        { ...data, avatar: file !== undefined ? file.path : oldData.avatar },
        (err, data) => {
          return data;
        }
      );

      res.status(200).send({
        message: "Blogs has been updated",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteData: async (req, res) => {
    try {
      const id = req.params.id;
      await Blogs.deleteOne({ _id: id }, (err, result) => {
        if (err) {
          console.log(err);
        }
        res.status(200).send({
          message: `Your Blog id ${id} has been deleted.`,
          data: result
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const getId = req.params.id;
      const result = await Blogs.findOne({ _id: getId });
      res.status(200).send({
        message: `Get Blogs By id = ${getId}`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  getByIdAll: async (req, res) => {
    try {
      const getId = req.params.id;
      const result = await Blogs.find({ idUsers: getId });
      res.status(200).send({
        message: `Get All Blogs By id Users = ${getId}`,
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
        const { email, id, username, firstname } = result;

        const token = jwt.sign({ email, id, username, firstname }, "INISECRET");

        res.status(200).send({
          message: "You are successfully logged in",
          data: token
        });
      } else {
        res.status(403).send({
          message: "You are not an user, please register first"
        });
      }
    } catch (error) {
      console.log(error);
    }
  },

  //blogs/filestack/:id
  addFilestact: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;

      const result = await Blogs.create({
        ...data,
        idUsers: id
      });

      res.status(200).send({
        message: "New data user is successfully added",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  }
};
