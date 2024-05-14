const express = require('express')
const router = express.Router()

const { protect } = require('../middleware/authMiddleware')
const { login, registrar,showdata, updateUsuario ,deleteUsuario, findData} = require('../controllers/userController')

router.post('/login', login)
router.post('/registrar',registrar)
router.put('/:id', updateUsuario)
router.delete('/:id', deleteUsuario)
router.get('/data', showdata)
router.get('/userdata/:id', findData)

module.exports = router