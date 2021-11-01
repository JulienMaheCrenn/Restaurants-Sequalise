const { request, response } = require("express");
const express = require("express");

const port = 3001;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

app.get("/api/menu/:id", (request,response) => {
    response.send(`Hello you requested the menu with ID of ${request.params.id}`);
});

app.get("/api/restaurant/:id", (request,response) => {
    obj = null

    if(request.params.id === "1") {
        obj = {
            id: request.params.id,
            name: "Burger King"
        };
    } else {
        obj = "some other restaurant";
    };

    response.send(obj);
});

app.listen(port, () => {
    console.log("listening to port 3001");
});