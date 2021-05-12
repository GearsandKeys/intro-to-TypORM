import express from "express";
import { createConnection } from "typeorm";
import { User } from "./Entities/User";

const app = express();

createConnection({
    type: "postgres", //He uses mysql here
    database: "TypeormTutorial", //this is where you put DB name
    username: "root", //root is local host that comes with
    password: "", //Often is starts as empty like "", or is what you setup
    logging: true, //when ever a query is made to db it's logged to terminal
    synchronize: true, //You don't need to make table on you own, you can make entities...
    entities: [User],

})

//API requests

//Get all Users
app.get("/", (req,res) => {
    User.find().then((data) => {
        res.json(data);
    }); //should return a promise
});

app.post("/", (req,res) => {
    User.insert({
        firstName: "Nathan",
        lastName: "Gearke",
        username: "GearsAndKeys",
        password: "password",
        //no id needed since it's autoincremented
    });
    res.end(); //ends the request
});

app.listen("3001", (): void => {
    console.log("Server Running!");
});

