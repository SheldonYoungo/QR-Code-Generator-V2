const { Router } = require('express')
const path = require('path')
const qrImage = require('../controllers/qrImage')

const router = Router()

router.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

router.get('/download/:imageName', qrImage.download)
router.get('/qr-codes/:qrCode', qrImage.show)

router.post('/createQrImage', qrImage.create)

module.exports = router