import express from "express"
import mongoose from "mongoose"
import conf from "./core/conf.js"
import cors from "cors"
import personsRouter from "./entities/persons/router.js"
import incidentsRouter from "./entities/incidents/router.js"

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(conf.DB_URL)
.then(() => {console.log('Database Connected')})
.catch((err) => {console.log('Failed to connect.', conf, err)})

app.get("/", (req, res) => res.send("Welcome to the API. /api/persons for persons, /api/incidents for incidents."))
app.get("/api", (req, res) => res.send("persons, incidents"))
app.use("/api/persons", personsRouter)
app.use("/api/incidents", incidentsRouter)

 app.listen(conf.PORT, () => console.log(`Server running on port ${conf.PORT}`))