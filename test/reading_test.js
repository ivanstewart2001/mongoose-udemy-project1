const assert = require("assert");
const User = require("../src/user");

describe("Reading users out of the database", () => {
  let joe;

  beforeEach(async () => {
    joe = new User({ name: "Joe" });
    await joe.save();
  });

  it("finds all users with a name of joe", async () => {
    const res = await User.find({ name: "Joe" });
    assert(res[0].id === joe.id);
  });

  it("find a user with a particular id", async () => {
    const res = await User.findOne({ _id: joe._id });
    assert(res.name === joe.name);
  });
});
