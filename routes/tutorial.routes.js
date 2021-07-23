module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller");
  const router = require("express").Router();

  router.get("/", tutorials.findAll);

  router.post("/", tutorials.create);

  router.get("/published", tutorials.findAllPublished);

  router.get("/:id", tutorials.findOne);

  router.put("/:id", tutorials.update);

  router.delete("/:id", tutorials.delete);

  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router);
};