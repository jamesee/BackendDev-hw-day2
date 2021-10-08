const express = require('express')
const router = express.Router()


// router.post('/', (req,res) => {
//     const { name } = req.body;

//     if (!name) {
//         return res.status(401).json({success: false, msg: "Please provide a name."})
//     }
//     res.status(200).json({ success: true, person: name})
// })

router.post('/', async (req, res) => {
    console.debug(req.body)

    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send(`No empty name please.`)
})

module.exports = router;