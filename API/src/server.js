const express = require("express")

const app = express()

app.post("/users", (request, response) => {
    response.send("Meu nome é Pedro!")
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server running at Port ${PORT}`))