// guest page
const guestPage = async (ctx) => {
  ctx.body = "guest page";
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
