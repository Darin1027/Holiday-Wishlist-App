const router = require("express").Router();
const { User, List } = require("../models");
const withAuth = require("../utils/auth");

// landing page route
router.get("/", async (req, res) => {
  res.render("login");
});

// singup route
router.get("/signup", async (req, res) => {
  res.render("signup");
});

// Get all friends route
router.get("/friends", withAuth, async (req, res) => {
  try {
    const listData = await List.findAll({
      where: {
        user_id: req.query.id,
      },
    });
    const lists = listData.map((list) => list.get({ plain: true }));

    const allUserData = await User.findAll();
    const users = allUserData.map((user) => user.get({ plain: true }));
    console.log(users);
    
    console.log(req.query.id);
    let currentFriend;

   

    users.map((user) => {
      console.log(user.username);
      if (user.id == req.query.id) {
        currentFriend = user;
      }
    });
    console.log(currentFriend);

    res.render("friends", { lists, users, currentFriend });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Friend route by id
router.get("/friends/:id", async (req, res) => { });

router.get("/profile", withAuth, async (req, res) => {
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


module.exports = router;
