<<<<<<< HEAD
const router = require("express").Router();
const { User, List } = require("../../models");
=======
const router = require('express').Router();
const { User, List } = require('../../models');


// create new item
router.post('/', async (req, res) => {
    const body = req.body
    try {
        const listdata = await List.create({ ...body, user_id: req.session.user_id })

        res.status(200).json(listdata);
    } catch (err) {
        res.status(400).json(err);
    }
>>>>>>> main

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    const listdata = await List.create({
      ...body,
      user_id: req.session.user_id,
    });
    res.status(200).json(listdata);
  } catch (err) {
    res.status(400).json(err);
  }
});

<<<<<<< HEAD
router.put("/:id", async (req, res) => {
  console.log(req.body);
  try {
    const [affectedRows] = await List.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
=======
// update item
router.put('/:id', async (req, res) => {
    console.log(req.body)
    try {
        const [affectedRows] = await List.update(req.body,

            {
                where: {
                    id: req.params.id
                }
            }

        )
        if (affectedRows > 0) {
            res.status(200).end();
        }
        else {
            res.status(404).end()
        }
    } catch (err) {
        res.status(400).json(err);
>>>>>>> main
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

<<<<<<< HEAD
router.delete("/:id", async (req, res) => {
  try {
    const listdata = await List.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(listdata);
  } catch (err) {
    res.status(400).json(err);
  }
=======
// delete item
router.delete('/:id', async (req, res) => {
    try {
        const listdata = await List.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(listdata);
    } catch (err) {
        res.status(400).json(err);
    }
>>>>>>> main
});

module.exports = router;
