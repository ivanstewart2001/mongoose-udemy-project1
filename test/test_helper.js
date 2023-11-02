const mongoose = require("mongoose");

// Whenever you need to create a promise use the ES6 Promise
mongoose.Promise = global.Promise;

// only is executed once for the entire test suite
before((done) => {
  mongoose.connect("mongodb://localhost/users_test");
  mongoose.connection
    .once("open", () => {
      console.log("Good to go!");
      done();
    })
    .on("error", (err) => {
      console.warn("Warning", err);
    });
});

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    // ready to run the next test!
    done();
  });
});
