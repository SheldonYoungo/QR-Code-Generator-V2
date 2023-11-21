export function QrCode({imgName}) {
  return (
    <>
      <img src={`http://localhost:3000/qr-codes/${imgName}`} />
    </>
  )
}