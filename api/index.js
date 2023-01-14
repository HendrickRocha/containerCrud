import express from 'express'
import cors from 'cors'
import containerRoutes from './routes/container.js'
import moveRoutes from './routes/move.js'
import reportRoutes from './routes/report.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/',containerRoutes, moveRoutes, reportRoutes)

app.listen(8800)