const express = require("express")
const app = express()

const PORT = 4000;


const users =[    
    { name: "John", age: 39 },
    { name: "Matt", age: 21 },
    { name: "Beth", age: 43 },
    { name: "Sandy", age: 39 },
    { name: "Mike", age: 52 }
]
app.get("/users", (req, res) => {
    res.send(users)

})


const movies =[    
    { name: "King Kong VS Godzilla", year: 2021 },
    { name: "Mortal Kombat", year: 2021 },
    { name: "Mine Sweeper", year: 2021 },
       
]
app.get("/movies", (req, res) => {
    res.send(movies)

})


const Shows =[    
    { name: "Mouse", year: 2021 },
    { name: "Court Lady", year: 2021 },
    { name: "Beyond Evil", year: 2021 },
      
]
app.get("/Shows", (req, res) => {
    res.send(Shows)

})


app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
} )