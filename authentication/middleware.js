/*if the user is authenticated (has the right cookies),
  calls the next middleware, otherwise redirects to the page where user can login
*/
function authenticationMiddleware () {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/')
  }
}
