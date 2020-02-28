const { Hoby } = require("../../models"); //ambil data dari database

module.exports = {
  //hoby/
  addData: async (req, res) => {
    try {
      const getData = req.body;
      const file = req.file;
      const result = await Hoby.create({
        ...getData,
        avatar: file === undefined ? null : file.path
      });

      res.status(200).send({
        message: "New Hoby has been success",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const result = await Hoby.find({});

      res.status(200).send({ message: "Show data Hoby : ", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  //hoby/nama/:nama
  getOne: async (req, res) => {
    try {
      const getNama = req.params.nama;
      const result = await Hoby.find({ nama: getNama });
      res.status(200).send({
        message: `Get Hoby By nama = ${getNama}`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },

  //hoby/id/:id
  getById: async (req, res) => {
    try {
      const getId = req.params.id;
      const result = await Hoby.find({ _id: getId });
      res.status(200).send({
        message: `Get Hoby By id = ${getId}`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateByNama: async (req, res) => {
    try {
      const data = req.body;
      const getNama = req.params.nama;
      await Hoby.findOneAndUpdate(
        { nama: getNama },
        data,
        { new: true },
        (err, newData) => {
          res.status(200).send({
            message: `Edit Hoby by Nama ${getNama}`,
            data: newData
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  },
  deleteByNama: async (req, res) => {
    try {
      const getNama = req.params.nama;
      await Hoby.deleteOne({ nama: getNama }, (err, result) => {
        if (err) {
          console.log(err);
        }
        res.status(200).send({
          message: `User with Nama : ${getNama} has been deleted.`,
          data: result
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  getByUserId: async (req, res) => {
    try {
      const getId = req.params.id;
      const result = await Hoby.find({ user: getId }).populate(
        "user",
        "username email firstname lastname email"
      );
      res.status(200).send({ message: "list data", data: result });
    } catch (error) {
      console.log(error);
    }
  }
};
