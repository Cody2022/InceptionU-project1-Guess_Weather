const express = require("express");
const app=express();

const checkRouter=require("./routes/app");
const gameRouter=require("./routes/game");

app.use("/app", checkRouter);
app.use('/game',gameRouter);

const PORT = 8000;
function echoPortNumber() {
    console.log(`Listening on port ${PORT}`);
}
  
app.listen(PORT, echoPortNumber);





