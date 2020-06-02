import express, { response } from 'express'

const app = express()

app.get("/users", (request, response) => {
    console.log("Listagem de usuários")

    response.json([
        "John",
        "Jason",
        "Lucas",
        "Daniel",
        "Jonas"
    ])
})

app.listen(3333)