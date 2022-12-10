const router = require('express').Router();
const { User, List } = require('../../models');


// The `/api/categories` endpoint


// router.get('/', async (req, res) => {
//     try {

//         const userData = await User.findAll({
//             include: [{ model: List }]
//         })
//         res.status(200).json(userData)
//     }
//     catch (err) {
//         res.status(400).json(err)
//     }

// });


// router.get('/:id', async (req, res) => {
//     try {
//         const userData = await User.findByPk(req.params.id, {
//             include: [{ model: List }]
//         },

//         )
//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }

// });


router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body)

        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }

});

router.put('/:id', async (req, res) => {
    try {
        const userData = await User.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            }

        )
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }

});


router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
