import express from 'express'
import checkaccount from './src/routes/checkaccount.js'
import { endpoint } from 'index.html'

const app = express()

app.use(endpoint)
app.use('/api/', checkaccount)

app.listen(3000, () => {
    console.log('App Running on http://localhost:3000')
})
