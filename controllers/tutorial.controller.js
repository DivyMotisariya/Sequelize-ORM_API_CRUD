const { successRes, errorRes } = require("../helpers/apiResponses");
const { tutorials } = require("../models");
const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    return successRes(res, "Title must be present");
  }
  let {
    body: { title, description, published },
  } = req;
  published = published || false;
  const tutorial = { title, description, published };
  Tutorial.create(tutorial)
    .then((data) => successRes(res, data))
    .catch((err) => errorRes(res, err));
};

exports.findAll = (req, res) => {
  let {
    body: { title },
  } = req;
  let condition = title ?
    {
      title: {
        [Op.like]: `%${title}%`,
      },
    } :
    null;

  Tutorial.findAll({ where: condition })
    .then((data) => successRes(res, data))
    .catch((err) => errorRes(res, err));
};

exports.findOne = (req, res) => {
  let {
    params: { id },
  } = req;
  tutorials
    .findByPk(id)
    .then((data) => successRes(res, data))
    .catch((err) => errorRes(res, err));
};

exports.update = (req, res) => {
  let {
    params: { id },
    body,
  } = req;
  Tutorial.update(body, { where: { id } })
    .then((num) => successRes(res, num))
    .catch((err) => errorRes(res, err));
};

exports.delete = (req, res) => {
  let {
    params: { id },
  } = req;
  Tutorial.destroy({ where: { id } })
    .then((num) => successRes(res, num))
    .catch((err) => errorRes(res, err));
};

exports.deleteAll = (req, res) => {
  Tutorial.destroy({
      where: {},
      truncate: false,
    })
    .then((num) => successRes(res, num))
    .catch((err) => errorRes(res, err));
};

exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then((num) => successRes(res, num))
    .catch((err) => errorRes(res, err));
};