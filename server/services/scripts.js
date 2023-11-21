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

function createQrImage (url) {
  const qrCode = qr.image(url)
  let domain = new URL(url).hostname
  domain = domain.substring(domain.lastIndexOf('.', domain.lastIndexOf('.') - 1) + 1) //  Trimming the domain to get only its name

  const qrImageFileName = `${domain}_qr_code.png`
  const qrImageLocation = `./public/qr-codes/${qrImageFileName}`

  deleteFilesWithNamesContaining('./public/qr-codes/', urlExtentions)
  qrCode.pipe(fs.createWriteStream(qrImageLocation))

  return qrImageFileName
}

function deleteFilesWithNamesContaining (directoryPath, nameParts) {
  // Lee el contenido del directorio
  fs.readdir(directoryPath, (err, files) => {
    if (err) throw err

    // Itera sobre los archivos en el directorio
    for (const file of files) {
      // Verifica si el nombre del archivo contiene una de las cadenas en el array nameParts
      if (nameParts.some(namePart => file.includes(namePart))) {
        // Elimina el archivo
        fs.unlink(path.join(directoryPath, file), err => {
          if (err) throw err
        })
      }
    }
  })
}

module.exports = createQrImage
