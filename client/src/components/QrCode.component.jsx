import saveAs from 'file-saver'
import ProgressiveImage from 'react-progressive-graceful-image'

import { SERVER_URL } from "../utils/const"

export function QrCode({ imgName }) {
  const ImageSrc = `${SERVER_URL}/qr-codes/${imgName}`

 const handleDownload = () => {
  event.preventDefault()
  fetch(`${SERVER_URL}/download/${imgName}`)
    .then(res => res.blob())
    .then(blob => saveAs(blob, imgName))
 }

 return (
    <>
      <div>

        <ProgressiveImage src={ImageSrc} placeholder='QR-Code'>
          {(src, loading) => (
            loading 
            ? (<h3>Creating code...</h3>)
            : (<img src={src} width='300' height='300'></img>)
          )}
        </ProgressiveImage>
        <br></br>
        <button className='download-btn' onClick={handleDownload}>Descargar</button>
      </div>
    </>
 )
}
