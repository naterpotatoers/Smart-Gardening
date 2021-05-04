import express from 'express'
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.listen(5000, () => {
  console.log('Server started on https://localhost:5000')
})