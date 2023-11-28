import { useState } from "react"
import validator from 'validator'

import { SERVER_URL } from '../utils/const'

export function UseQrCode ({ initialUrl }) {
  const [url, setUrl] = useState(initialUrl)
  const [prevUrl, setPrevUrl] = useState(url)
  const [qrCodeName, setQrCodeName ] = useState(null)
  const [error, setError] = useState('')

   // Generate QR code function
  const generateQrCode = async () => {
    // Validate url format
    if(!validator.isURL(url,{ allow_query_components: true})){
      setError('Please, introduce a valid Url')
      return 
    }
  
    const fetchOptions = {
        method: 'post',
        headers : { 'Content-Type': 'application/json'},
        body: JSON.stringify({ url })
    }
  
    // Fetch QR code from server
    fetch(`${SERVER_URL}/createQrImage`, fetchOptions)
      .then(res => res.json())
      .then(data => {
        if(data.error) {
          throw new Error(data.error)
        }
        // Update states with new QR code data
        setQrCodeName(data.imageName)
        setPrevUrl(url)
        setError('')
      })
      .catch(e => {
        setError(e.message)
      })
  } 
  
  // Return state values and functions for consumption
  return { url, prevUrl, qrCodeName, setUrl, generateQrCode, error, setError }
}