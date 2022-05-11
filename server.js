// DEPENDENCIES
const express = require('express')
const cors = require("cors")

// IMPORT JSON FILES
const projects = require("./projects.json")
const about = require("./about.json")
const { append } = require('express/lib/response')

// CREATE OUR APP OBJECT
const app = express()

// SET UP MIDDLEWARE
app.use(cors())

// HOME ROUTE TO TEST APP
app.get("/", (req, res) => {
    res.send("Taylor Swift IS the music industry")
})

// ROUTE TO RETRIEVE PROJECTS
app.get("/projects", (req, res) => {
    // send projects via JSON
    res.json(projects)
})

// ROUTE TO RETRIEVE ABOUT INFORMATION
app.get("/about", (req, res) => {
    res.json(about)
})

// PORT
const PORT = process.env.PORT || 4000






// LISTEN TO SERVER
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))