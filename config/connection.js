const mongoose = require("mongoose");

// mongoose connection drive
mongoose
  .connect(process.env.BACKEND_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(
    () => {
      console.log("successfully connected to the database");
    },
    (error) => {
      console.log("connection error:" + error);
    }
  );
