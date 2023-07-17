const config = require("config.json");
const jwt = require("jsonwebtoken");

// users hardcoded for simplicity, store in a db for production applications
const users = [
  {
    id: 1,
    username: "test",
    password: "test",
    firstName: "Test",
    lastName: "User",
  },
];

module.exports = {
  authenticate,
  getAll,
  getAllImages
};

async function authenticate({ username, password }) {
  console.log("authenticate", username, password);
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) throw "Username or password is incorrect";

  // create a jwt token that is valid for 7 days
  const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: "7d" });

  return {
    ...omitPassword(user),
    token,
  };
}

async function getAll() {
  return users.map((u) => omitPassword(u));
}

async function getAllImages() {
  return [
    {
      url: "https://img.freepik.com/free-vector/household-appliances-realistic-composition_1284-65307.jpg?w=826&t=st=1689338178~exp=1689338778~hmac=9f70f8f37258219792c934d9f883123bae318cc92897f80bd438f368f12ba791",
    },
    {
      url: "https://img.freepik.com/free-photo/checking-current-laptop-circuit-board_1098-13759.jpg?w=740&t=st=1689338120~exp=1689338720~hmac=b2265636f269aa6e1ce284916824389d211b9f40da24d3d161e52e7639df247f",
    },
    {
      url: "https://img.freepik.com/free-vector/household-appliances-realistic-composition_1284-65307.jpg?w=826&t=st=1689338178~exp=1689338778~hmac=9f70f8f37258219792c934d9f883123bae318cc92897f80bd438f368f12ba791",
    },
    {
      url: "https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=740&t=st=1689571564~exp=1689572164~hmac=164193adc632c859affec70caf28351e93ede80a581ce65927ee60db65fe6eba",
    },
    {
      url: "https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=740&t=st=1689571735~exp=1689572335~hmac=3fecc9cfa3153176dc867928816332eb98e76a6c1535120343f1cbddc4888167",
    },
  ];
}

// helper functions

function omitPassword(user) {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}