import { useState } from "react"
import isValidUrl from "../utils/isValidUrl"

export function UseQrCode ({ initialUrl }) {
  const [url, setUrl] = useState(initialUrl)
  const [prevUrl, setPrevUrl] = useState(url)
  const [qrCodeName, setQrCodeName ] = useState(null)
  const [error, setError] = useState('')

  const generateQrCode = async () => {
    if(!isValidUrl(url)){
      setError('Please, introduce a valid Url')
      return 
    }
  
    const fetchOptions = {
        method: 'post',
        headers : { 'Content-Type': 'application/json'},
        body: JSON.stringify({ url })
    }
  
    fetch('http://localhost:3000/createQrImage', fetchOptions)
      .then(res => res.json())
      .then(data => {
        if(data.error) {
          throw new Error(data.error)
        }
        setQrCodeName(data.imageName)
        setPrevUrl(url)
        setError('')
      })
      .catch(e => {
        setError(e.message)
      })
  } 

  return { url, prevUrl, qrCodeName, setUrl, generateQrCode, error, setError }
}