const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors);

app.use(express.json())

const Users = [{
    "id": 1,
    "name": "Wesley",
    "surname": "Bernardes",
    "age": 21,
    "gender": "M"
}];

app.get("/api", (req, res) => {
    res.json(Users);
});

app.get("/api/:id", (req, res) => {
    const userId = req.params.id;

    const userFiltered = Users.find(user => {
        Number(user.id) === Number(userId);
    });

    if(!userFiltered) {
        return alert("User not found!");
    }

    res.json(userFiltered);
});

app.post("/api", (req, res) => {
    const lastId = Users[Users.length - 1].id;

    Users.push({
        id: lastId + 1,
        name: req.body.params,
        surname: req.body.params,
        age: req.body.params,
        gender: req.body.params
    });

    res.json("User saved!");
});

app.put("/api/:id", (req, res) => {
    const userId = req.params.id;

    const userFiltered = Users.find(user => {
        Number(user.id) === Number(userId);
    });

    if(!userFiltered) {
        return alert("User not found!");
    }

    const updatedUser = {
        ...userFiltered,
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        gender: req.body.gender,
    }

    Users = Users.map(user => {
        if(Number(user.id) === Number(userId)) {
            user = updatedUser;
        }

        return user
    });
});

app.delete("/api/:id", (req, res) => {
    const userId = req.params.id;

    Users.filter(user => Number(user.id) === Number(userId));
});

app.listen(3000, () => {
    console.log("Everything is running well...");
});