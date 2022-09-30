const express = require("express");
const path = require('path');

const router = express.Router();
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname+'/pages/home.html');
});
router.get('/about',function(req,res) {
    res.sendFile(__dirname+'/pages/about.html')
})

app.use('/', router);
app.listen(8000, console.log("Listening on port 8000"))