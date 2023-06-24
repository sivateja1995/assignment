const mongoose = require("mongoose");

// mongoose connection drive
mongoose
  .connect(process.env.BACKEND_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(
    () => {
      console.log("successfully connected to the database");
    },
    (error) => {
      console.log(process.env.BACKEND_URL)
      console.log("connection error:" + error);
    }
  );
