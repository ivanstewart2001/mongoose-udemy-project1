const assert = require("assert");
const User = require("../src/user");

describe("Deleting a user", () => {
  let joe;

  beforeEach(async () => {
    joe = new User({ name: "Joe" });
    await joe.save();
  });

  it("model instance delete", async () => {
    await joe.deleteOne();

    const res = await User.findOne({ _id: joe.id });
    assert(res === null);
  });

  it("class method delete", () => {});

  it("class method findOneAndDelete", () => {});
});
