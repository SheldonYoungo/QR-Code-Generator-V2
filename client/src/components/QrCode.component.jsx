import { useState, useEffect } from 'react'
import saveAs from 'file-saver'

import { SERVER_URL } from "../utils/const"

export function QrCode({ imgName }) {
 const handleDownload = () => {
  event.preventDefault()
  fetch(`${SERVER_URL}/download/${imgName}`)
    .then(res => res.blob())
    .then(blob => saveAs(blob, imgName))
 }

 return (
    <>
      <div>
        <img
          src={`${SERVER_URL}/qr-codes/${imgName}`}
          alt="QR Code"
        />
        <br></br>
        <button className='download-btn' onClick={handleDownload}>Descargar</button>
      </div>

    </>
 )
}
