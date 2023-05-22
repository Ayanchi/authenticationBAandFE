const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    if(req.method === "OPTIONS"){
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(481).json({message: "не авторизаван"})
        }
        const decoded = jwt.verify(token, process.env.SECTER_KEY)
        req.user = decoded
        next()
    } catch (error) {
        res.status(481).json({message: "не авторизаван"})
    }
}