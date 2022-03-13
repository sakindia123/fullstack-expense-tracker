import cors from 'cors'
import express from "express";
import connect from "./database/db.js";
import transactions from "./routes/transactions.js";

const port = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/transactions', transactions)

app.listen(port)

connect()