const express = require('express')
const router = express.Router()

const lib = require('../library')

router.get('/', (req,res) => {
    res.status(200).json({success: true, library: lib.user })
})

router.post('/', (req,res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({success: false, msg: "Please provide a name."})
    }
    res.status(200).json({ success: true, person: name})
})


module.exports = router;