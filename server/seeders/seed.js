const db = require("../config/connection");
const {User, Book} = require("../models");
const userSeeds = require("./userSeeds.json");
const bookSeeds = require("./bookSeeds.json");
const userController = require("../controllers/user-controller");

db.once("open", async () => {
  try {

    await User.deleteMany({});

    userSeeds.forEach((userSeed) => {
      const randomBooks = bookSeeds.sort(() => Math.random() - 0.5).slice(0, 2);
      userSeed.savedBooks = randomBooks;
    });

    await User.create(userSeeds);

    let users = await User.find({});
    console.log(users);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
