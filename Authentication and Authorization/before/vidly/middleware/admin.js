
module.exports = function(req, res, next) {
    // 401 Unauthorized
    // 403 Forbidden

    // Authenticate user set req.user

    if (!req.user.isAdmin) return res.status(403).send("Access denied.");

    next();
}