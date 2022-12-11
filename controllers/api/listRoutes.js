const router = require('express').Router();
const { User, List } = require('../../models');



router.post('/', async (req, res) => {
    try {
        const listdata = await List.create(req.body)

        res.status(200).json(listdata);
    } catch (err) {
        res.status(400).json(err);
    }

});

router.put('/:id', async (req, res) => {
    try {
        const listdata = await List.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            }

        )
        res.status(200).json(listdata);
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
