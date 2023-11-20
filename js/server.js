// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

//firebase admin setup
let serviceAccount =require("./ecom-website-62767-firebase-adminsdk-fma5y-d10aa729f2.json");

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
});

let db =admin.firestore();


let staticPath = path.join(--dirname, "public");

//intializing express.js
const app = express();

//middlewares
app.use(express.static(staticPath));

// 404 route
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log('listening on port 3000.......');
})

//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

//signup route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})

