const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    let token = req.headers.authorization;
    if (token && token.startsWith("Bearer")) {
        try {
            token = token.split(" ")[1]; // "Bearer " hata kar sirf token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded; // Token se ID nikal li
            next(); // Aage badhne ka signal
        } catch (error) {
            return res.status(401).json({ message: "Not authorized, Invalid Token" });
        }
    } else {
        res.status(401).json({ message: "Not authorized, No Token provided" });
    }
};

module.exports = { protect };