const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () =>{
    console.log(`app is listening on port ${port} `);
});


// app.get ("/", (req, res) =>{
//     res.send("you contacted root path");
// });

// app.get ("/apple", (req, res) =>{
//     res.send("you contacted apple path");
// });

// app.get ("/orange", (req, res) =>{
//     res.send("you contacted orange path");
// });

// app.get ("*", (req, res) =>{
//     res.send("this path does not exists");
// });

// app.post ("/", (req, res) =>{
//     res.send("you send a post request");
// });

// app.use((req, res) =>{

//     // console.log(req);
//     console.log("request received");
//     res.send("this is a response");
// });


//using params

app.get ("/", (req, res) =>{
    res.send("hello i am root");
});

app.get ("/:username/:id", (req, res) =>{
    let {username, id} = req.params;
    let htmlStr = ` <h1>welcome to the page of @${username}!</h1>`
    res.send(htmlStr);
});

app.get("/search", (req, res) =>{
    let { q } = req.query;

    if(!q){
        res.send(`<h1> nothing search</h1>`);
    }
    res.send(`search result for query: ${q}`);
});