import { SERVER_URL } from "../utils/const";

export function QrCode({imgName}) {
  return (
    <>
      <img src={`${SERVER_URL}/qr-codes/${imgName}`} />
    </>
  )
}