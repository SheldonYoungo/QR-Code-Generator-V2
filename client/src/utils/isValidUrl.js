const isValidUrl = (inputUrl) => {
  const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
  return urlPattern.test(inputUrl)
}

export default isValidUrl