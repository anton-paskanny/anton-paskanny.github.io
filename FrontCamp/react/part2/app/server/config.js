const config = {
  port: 3000,
  db: {
    host: 'localhost',
    name: 'blogs-app'
  },
  routes: {
    users: {
      logout: 'users/logout',
      signin: 'users/signin',
      signup: 'users/signup'
    },
    blogs: {
      base: 'api/blogs'
    }
  }
};

module.exports = config;
