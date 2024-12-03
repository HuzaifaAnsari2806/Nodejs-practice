// const http = require('http');
const fs = require('fs');
// const url = require('url');

// const mySevrer = http.createServer((req, res) => {
//     if (req.url === "/favicon.ico" || req.url === "/sw.js") return res.end();
//     const log = `${new Date().toISOString()} : ${req.url} New Request Received\n`;
//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);
//     fs.appendFile("./log.txt", log, (err, data) => {
//         if (!err) {
//             switch (myUrl.pathname) {
//                 case '/':
//                     res.end("You are in the home page.");
//                     break;
//                 case '/about':
//                     res.end("You are in the about page.");
//                     break;
//                 case '/contactus':
//                     res.end("You are in the contactus page.");
//                     break;
//                 case '/profile':
//                     res.end("You are in the profile page.");
//                     break;
//                 case '/policy':
//                     res.end("You are in the policy page.");
//                     break;
//                 default:
//                     res.end('YOu are way outside your limit.');
//             }
//         }
//         else {
//             console.log(err);
//         }
//     })
// });

// mySevrer.listen(8000, () => console.log("Server Started"));

// const users = require('./User_data.json');
const express = require('express');
const db = require('./db/db');

const app = express()
app.listen(8000, () => console.log("Server Started"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//     const body = req.body
//     if (!body.firstName ||
//         !body.lastName ||
//         !body.email ||
//         !body.gender
//     ) {
//         return res.status(400).json({ msg: "All fields are required" });
//     }
//     next();
// });

app.get("/api/users", async (req, res) => {
    const users = await db.User.find({});
    res.json({ data: users });
});

// app.get("/api/users/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const user = users.find(user => user.id === id);
//     res.json(user);
// });

app.post("/api/users", async (req, res) => {
    const user = await db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
    });

    res.json({ msg: "User created successfully.", data: user })
});

app.route("/api/users/:id").get(async (req, res) => {
    const id = req.params.id;
    const user = await db.User.findById(id);
    res.json({ user });
})
    .put(async (req, res) => {
        const data = req.body;
        const id = req.params.id;
        await db.User.findByIdAndUpdate(id, data);
        res.json({ msg: "User updated" });
    })
    .delete(async (req, res) => {
        const id = req.params.id;
        await db.User.findByIdAndDelete(id)
        res.json({ msg: "User Deleted Successfully" });
    });