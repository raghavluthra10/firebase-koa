const path = require('path')

// guest page

const randomArr = [
  { id: 101, name: "Fight Club", year: 1999, rating: 8.1 },
  { id: 102, name: "Inception", year: 2010, rating: 8.7 },
  { id: 103, name: "The Dark Knight", year: 2008, rating: 9 },
  { id: 104, name: "12 Angry Men", year: 1957, rating: 8.9 },
];

const guestPage = async (ctx) => {
  try {
    const dirname = path.join( __dirname ,'../client/build/index.html') 
    ctx.body = { data: randomArr, success: true, dirname };
  } catch (error) {
    ctx.body = { success: false };
    console.error(error);
  }
};

// login page

// signup page

// home page
const homePage = async (ctx) => {
  ctx.body = "you're now loggin in!!!";
};

module.exports = {
  guestPage,
  homePage,
};
