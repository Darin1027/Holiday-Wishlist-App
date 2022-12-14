const router = require("express").Router();
const { User, List } = require("../models");
const { withAuth } = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/friends", async (req, res) => {
  try {
    const listData = await List.findAll({
      where: {
        user_id: req.query.id,
        // user_id: req.query.id,
      },
    });
    const lists = listData.map((list) => list.get({ plain: true }));

    const allUserData = await User.findAll();
    const users = allUserData.map((user) => user.get({ plain: true }));
    console.log(users);

    res.render("friends", { lists, users });
  } catch (err) {}
});

router.get("/profile", async (req, res) => {
  try {
    const listdata = await List.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const allUserData = await User.findAll();
    const users = allUserData.map((user) => user.get({ plain: true }));
    console.log(users);

    const lists = listdata.map((list) => list.get({ plain: true }));

    res.render("profile", {
      lists,
      users,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login route
router.get("/login", (req, res) => {
  res.redirect("/");
  res.render("login");
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: List }],
    });

    const user = userData.get({ plain: true });
    res.status(200).json(userData);
    res.render("homepage", {
      user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
