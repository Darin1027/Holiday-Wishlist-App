const router = require('express').Router();
const { User, List } = require('../models');


router.get('/', async (req, res) => {

    // res.status(200).json(userData)

    // res.status(200).json(userData)
    res.render('login'

        // loggedIn: req.session.loggedIn,
    );



});



router.get('/homepage', async (req, res) => {
    try {

        const userData = await User.findAll({
            include: [{ model: List }]
        })
        // res.status(200).json(userData)
        const users = userData.map((user) =>
            user.get({ plain: true })
        );
        // res.status(200).json(userData)
        res.render('homepage', {
            users
            // loggedIn: req.session.loggedIn,
        });
    }
    catch (err) {
        res.status(400).json(err)
    }

});


router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{ model: List }]
        },

        )
        // const users = userData.map((user) =>
        //     user.get({ plain: true })
        // );
        const user = userData.get({ plain: true });
        res.status(200).json(userData)
        res.render('homepage', {
            user
            // loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }

});

// router.get('/', async (req, res) => {
//     try {

//         const listdata = await List.findAll({

//         })
//         const lists = listdata.map((user) =>
//             user.get({ plain: true })
//         );
//         // res.status(200).json(listdata)
//         res.render('homepage', {
//             lists
//             // loggedIn: req.session.loggedIn,
//         });
//         // res.status(200).json(listdata)
//     }
//     catch (err) {
//         res.status(400).json(err)
//     }

// });


// router.get('/:id', async (req, res) => {
//     try {
//         const listdata = await List.findByPk(req.params.id)
//         const list = listdata.get({ plain: true });
//         // res.status(200).json(list)
//         res.render('homepage', {
//             list
//             // loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }

// });

module.exports = router;
