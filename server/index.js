const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')

app.use(express.static(path.join(__dirname, '..', 'dist')))

app.get('/api/didYandhiDrop', async (req, res, next) => {

  try {
    const kanyeLink = 'https://itunes.apple.com/lookup?id=2715720&entity=album'
    const { data, } = await axios.get(kanyeLink)
    console.log('data:', data)
    res.send(data)
  } catch (err) {
    console.log(err)
  }

})

app.use('*', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '..', 'dist/index.html'))
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
  console.log(`app is running on PORT ${port}`)
})
