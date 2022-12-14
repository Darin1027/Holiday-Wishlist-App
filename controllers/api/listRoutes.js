const router = require('express').Router();
const { User, List } = require('../../models');
// const { withAuth } = require("../../utils/auth");


router.post('/', async (req, res) => {
    const body = req.body
    try {
        const listdata = await List.create({ ...body, user_id: req.session.user_id })

        res.status(200).json(listdata);
    } catch (err) {
        res.status(400).json(err);
    }

});

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
    }

});


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
});

module.exports = router;
