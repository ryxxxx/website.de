const express = require('express')
router = express.Router()

router.get('/', (req, res) => {
    res.render('index', { title:'Flautissimo'})
})

module.exports = router