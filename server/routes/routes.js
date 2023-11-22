const { Router } = require('express')
const path = require('path')
const qrImage = require('../controllers/qrImage')

const router = Router()

router.get('/', (req, res) => {
  // Send the HTML file to the client
  return res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

// Downloads the qr-code as an .png file
router.get('/download/:imageName', qrImage.download)
// Sends the qr-code to the client to be shown
router.get('/qr-codes/:qrCode', qrImage.show)

// Generates a qr-code and returns it as an .png file
router.post('/createQrImage', qrImage.create)

module.exports = router