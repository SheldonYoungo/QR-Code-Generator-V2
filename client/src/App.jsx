import saveAs from 'file-saver'

import { Header } from './components/Header.component'
import { QrCode } from './components/QrCode.component'
import './App.css'
import { Form } from './components/Form.component'

import { UseQrCode } from './hooks/useQrCode'
import { SERVER_URL } from './utils/const'

function App() {
  const { url, prevUrl, error, setError, setUrl, generateQrCode, qrCodeName } = UseQrCode('')

  const handleSubmit = () => {
    event.preventDefault()
    if (url === prevUrl) {
      setError("You can't send the same url twice. Try with another url!!")
      return
    }
    generateQrCode()
  }

  const handleDownload = () => {
    event.preventDefault()
    fetch(`${SERVER_URL}/download/${qrCodeName}`)
      .then(res => res.blob())
      .then(blob => saveAs(blob, qrCodeName))
  }

  return (
    <main>
      <Header />

      <div className='Qr-form'>
        {qrCodeName && <QrCode imgName={qrCodeName} />}
        {error && <p>{error}</p>}
        <Form
          inputValue={url}
          changeHandler={e => setUrl(e.target.value)} submitHandler={handleSubmit} />
        {
          qrCodeName &&
          <button className='download-btn' onClick={handleDownload}>Descargar</button>
        }
      </div>

    </main>
  )
}

export default App
