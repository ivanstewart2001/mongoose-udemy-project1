const assert = require("assert");
const User = require("../src/user");

describe("Creating records", () => {
  it("saves a user", async () => {
    const joe = new User({ name: "Joe" });

    const res = await joe.save();

    // has joe been saved successfully?
    // if he has then he shouldn't be new
    assert(!res.isNew);
  });
});
