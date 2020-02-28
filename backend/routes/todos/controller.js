const { Todos } = require("../../models"); //ambil data dari database

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Todos.find({}).populate("user", "username email");
      res.status(200).send({ message: "List All Todos", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  addData: async (req, res) => {
    try {
      const result = await Todos.create(req.body);
      res.status(200).send({ message: "List has been created.", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const idku = req.params.id;
      await Todos.findById(idku, (err, docs) => {
        if (err) {
          console.log(err);
        }
        res.status(200).send({
          message: "Get By Id",
          data: docs
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateById: async (req, res) => {
    try {
      const data = req.body;
      await Todos.findByIdAndUpdate(req.params.id, data, (err, dtuser) => {
        res.status(200).send({
          message: "Todos has been updated",
          data: dtuser
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      await Todos.deleteOne({ _id: req.params.id }, (err, result) => {
        if (err) {
          console.log(err);
        }
        res.status(200).send({
          message: `Your ${req.params.id} has been deleted.`,
          data: result
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
};
