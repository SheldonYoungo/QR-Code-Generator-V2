const fs = require('fs')
const qr = require('qr-image')
const path = require('path')

const urlExtentions = [
  '.com',
  '.net',
  '.io',
  '.gob',
  '.org',
  '.us',
  '.co'
] // Parameter to check if the QR name match one of this common domain extentions

function createQrImage(url) {
  // Generate QR code iamge form url
  const qrCode = qr.image(url)

  // Get domain from url
  let domain = new URL(url).hostname

  // Trim domain to get only its name
  domain = domain.substring(domain.lastIndexOf('.', domain.lastIndexOf('.') - 1) + 1) //  Trimming the domain to get only its name

  // Set QR image file name
  const qrImageFileName = `${domain}_qr_code.png`

  // Set QR image location
  const qrImageLocation = `./public/qr-codes/${qrImageFileName}`

  // Delete old QR codes with similar names
  deleteFilesWithNamesContaining('./public/qr-codes/', urlExtentions)

  // Write QR code image to file location
  qrCode.pipe(fs.createWriteStream(qrImageLocation))

  return qrImageFileName
}

function deleteFilesWithNamesContaining (directoryPath, extensions = []) {
  // Reads directory content
  fs.readdir(directoryPath, (err, files) => {
    if (err) throw err

    // Iterate over files in the directory
    for (const file of files) {
      // Verifies if the file name extension matches one of the extensions
      if (extensions.some(namePart => file.includes(namePart))) {
        // Elimina el archivo
        fs.unlink(path.join(directoryPath, file), err => {
          if (err) throw err
        })
      }
    }
  })
}

module.exports = createQrImage
