const app = require('./config/config')

app.listen(app.get('PORT'), () => {
  console.log(`Server listening port ${app.get('PORT')}`)
})
