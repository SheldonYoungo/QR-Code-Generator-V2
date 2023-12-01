import { useState } from 'react'
import saveAs from 'file-saver'

import { SERVER_URL } from "../utils/const"

export function QrCode({ imgName }) {
  const [isLoading, setIsLoading] = useState(true)

 const handleDownload = () => {
  event.preventDefault()
  fetch(`${SERVER_URL}/download/${imgName}`)
    .then(res => res.blob())
    .then(blob => saveAs(blob, imgName))
 }

 const handleImageLoad = () => {
  setIsLoading(false);
}

 return (
    <>
      <div>

        {isLoading && <h3>Creating image...</h3>}
        <img
          src={`${SERVER_URL}/qr-codes/${imgName}`}
          alt="QR Code"
          onLoad={handleImageLoad}
        />
        <br></br>
        <button className='download-btn' onClick={handleDownload}>Descargar</button>
      </div>
    </>
 )
}
