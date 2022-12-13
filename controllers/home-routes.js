const router = require("express").Router();
const { User, List } = require("../models");
const { withAuth } = require("../utils/auth");

router.get("/", async (req, res) => {
  // res.status(200).json(userData)

  // res.status(200).json(userData)
  res.render(
    "login"

    // loggedIn: req.session.loggedIn,
  );
});

router.get("/signup", async (req, res) => {
  // res.status(200).json(userData)
  // res.status(200).json(userData)
  res.render("signup");
});

router.get("/profile", async (req, res) => {
  try {
    console.log("should happen 3rd");
    const listdata = await List.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const allUserData = await User.findAll();
    const users = allUserData.map((user) => user.get({ plain: true }));
    console.log(users);

    const lists = listdata.map((list) => list.get({ plain: true }));
    // res.status(200).json(listdata)
    res.render("profile", {
      lists,
      users,
    });
    // res.render('profile', {

    // });
    // res.status(200).json(listdata)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: List }],
    });
    // const users = userData.map((user) =>
    //     user.get({ plain: true })
    // );
    const user = userData.get({ plain: true });
    res.status(200).json(userData);
    res.render("homepage", {
      user,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
