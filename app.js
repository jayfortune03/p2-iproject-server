require(`dotenv`).config()

const express = require(`express`)
const cors = require(`cors`)
// const router = require(`./routes`)
const app = express()
const PORT = process.env.PORT || 3333

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(router)

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

module.exports = app