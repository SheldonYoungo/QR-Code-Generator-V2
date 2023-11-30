const createQrImage = require('../services/scripts')
const path = require('path')
exports.download = (req, res) => {
  const imageName = req.params.imageName
  const imagePath = path.join(__dirname, '../public', 'qr-codes', imageName)

  res.download(imagePath)
}

exports.show = (req, res) => {
  const qrCodeName = req.params.qrCode
  res.setHeader('Content-Disposition', 'attachment; filename=' + qrCodeName)
  res.setHeader('Content-type', 'image/png')
  res.sendFile(path.join(__dirname, '../public', 'qr-codes', qrCodeName))
}

let prevUrl = null //Sets the previous url
exports.create = (req, res) => {
  const url = req.body.url

  if (prevUrl === url) {
    let domain = new URL(url).hostname
    domain = domain.substring(domain.lastIndexOf('.', domain.lastIndexOf('.') - 1) + 1)
    return res.json({ imageName: domain + '_qr_code.png' })
  }

  try {
    const imageName = createQrImage(url)
    
    prevUrl = url

    res.json({ imageName })
  } catch (e) {
    res.status(500).json({ error: 'We got problems proccesing your url. Please make sure you have inserted the url correctly' })
  }
}